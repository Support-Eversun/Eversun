import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { connectToDatabase } from '@/lib/mongo';
import { User } from '@/lib/userModel';
import { verifyPassword } from '@/lib/password';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  if (!email || !password) {
    return NextResponse.json({ error: 'Email et mot de passe requis.' }, { status: 400 });
  }
  await connectToDatabase();
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: 'Utilisateur non trouvé.' }, { status: 404 });
  }
  const valid = await verifyPassword(password, user.password);
  if (!valid) {
    return NextResponse.json({ error: 'Mot de passe incorrect.' }, { status: 401 });
  }
  // Générer un token simple (à remplacer par JWT en prod)
  const token = Math.random().toString(36).substring(2);
  const response = NextResponse.json({ success: true, user: { email: user.email, role: user.role } });
  response.cookies.set('auth-token', token, { httpOnly: true });
  return response;
}
