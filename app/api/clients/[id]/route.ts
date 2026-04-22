import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongo';
import mongoose from 'mongoose';
import { ClientSchema } from '@/lib/clientModel';
import { hashPassword } from '@/lib/password';
<<<<<<< HEAD

const sectionToCollection = {
  clients: 'clients',
  'dp-en-cours': 'dp_in_progress',
  'dp-accordes': 'dp_received',
  'dp-refuses': 'dp_ko',
  'consuel-en-cours': 'consuel_in_progress',
  'consuel-finalise': 'consuel_finalised',
  raccordement: 'raccordement',
  'raccordement-mes': 'raccordement_finalised',
};
=======
import logger from '@/lib/logger';
>>>>>>> from-master

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const url = new URL(request.url);
    const section = url.searchParams.get('section');
<<<<<<< HEAD
    
    console.log('PATCH request received:', { id, section });
    
    const collection =
      sectionToCollection[section as keyof typeof sectionToCollection];
    if (!collection) {
      console.error('Section inconnue:', section);
      return NextResponse.json({ error: 'Section inconnue' }, { status: 400 });
    }
    
    console.log('Using collection:', collection);
    
    const Model =
      mongoose.models[collection] ||
      mongoose.model(collection, ClientSchema, collection);
    const data = await request.json();
    
    console.log('Data to update:', data);
=======

    logger.info({ id, section }, 'PATCH request received');

    // Use single unified collection
    const collectionName = 'clients';
    const Model =
      mongoose.models[collectionName] ||
      mongoose.model(collectionName, ClientSchema, collectionName);

    const data = await request.json();

    logger.info({ id, section, data }, 'Data to update');
>>>>>>> from-master

    try {
      // Hasher le mot de passe si présent et modifié
      if (data.motDePasse) {
        data.motDePasse = await hashPassword(data.motDePasse);
      }

<<<<<<< HEAD
      const updated = await Model.findByIdAndUpdate(id, data, { new: true });
      if (!updated) {
        console.error('Client non trouvé:', id);
        return NextResponse.json({ error: 'Client non trouvé' }, { status: 404 });
      }
      console.log('Client updated successfully:', updated);
      return NextResponse.json(updated);
    } catch (e: any) {
      console.error('Erreur lors de la modification:', e);
=======
      // Supprimer les anciens champs français pour éviter les conflits
      const frenchFieldsToRemove = [
        'Client',
        'Nom',
        'nom',
        'Date d\'envoi DP',
        'Attente DP',
        'Presta',
        'Status',
        'Numéro DP',
        'Ville',
        'Site DP',
        'Email utilisé',
        'Mot de passe',
        'PV Chantier',
        'Cause de non présence Consuel',
        'Prestataire',
        'Etat Actuel',
        'Type de consuel demandé',
        'Date dernière démarche',
        'Commentaires',
        'Date Estimatives',
        'Raccordement',
        'Numéro de contrat',
        'Date de Mise en service raccordement',
      ];

      const updateData = { ...data };
      for (const field of frenchFieldsToRemove) {
        if (updateData[field] !== undefined) {
          delete updateData[field];
        }
      }

      // Utiliser $unset pour supprimer les vieux champs français du document
      const unsetFields: any = {};
      for (const field of frenchFieldsToRemove) {
        unsetFields[field] = '';
      }

      const updated = await Model.findByIdAndUpdate(
        id,
        {
          $set: updateData,
          $unset: unsetFields,
        },
        { new: true }
      );

      if (!updated) {
        logger.error({ id }, 'Client not found for update');
        return NextResponse.json({ error: 'Client non trouvé' }, { status: 404 });
      }
      logger.info({ id, section }, 'Client updated successfully');
      return NextResponse.json(updated);
    } catch (e: any) {
      logger.error({ error: e?.message, id }, 'Error updating client');
>>>>>>> from-master
      return NextResponse.json(
        { error: 'Erreur lors de la modification', details: e?.message },
        { status: 500 }
      );
    }
  } catch (error: any) {
<<<<<<< HEAD
    console.error('Erreur serveur:', error);
=======
    logger.error({ error: error?.message }, 'Server error in PATCH endpoint');
>>>>>>> from-master
    return NextResponse.json(
      { error: 'Erreur serveur', details: error?.message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
<<<<<<< HEAD
  await connectToDatabase();
  const { id } = await params;
  // On attend section en query string
  const url = new URL(request.url);
  const section = url.searchParams.get('section');
  const collection =
    sectionToCollection[section as keyof typeof sectionToCollection];
  if (!collection) {
    return NextResponse.json({ error: 'Section inconnue' }, { status: 400 });
  }
  const Model =
    mongoose.models[collection] ||
    mongoose.model(collection, ClientSchema, collection);
  try {
    const deleted = await Model.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Client non trouvé' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { error: 'Erreur lors de la suppression' },
=======
  try {
    await connectToDatabase();
    const { id } = await params;
    const url = new URL(request.url);
    const section = url.searchParams.get('section');

    logger.info({ id, section }, 'DELETE request received');

    // Use single unified collection
    const collectionName = 'clients';
    const Model =
      mongoose.models[collectionName] ||
      mongoose.model(collectionName, ClientSchema, collectionName);

    try {
      const deleted = await Model.findByIdAndDelete(id);
      if (!deleted) {
        logger.error({ id }, 'Client not found for deletion');
        return NextResponse.json({ error: 'Client non trouvé' }, { status: 404 });
      }
      logger.info({ id, section }, 'Client deleted successfully');
      return NextResponse.json({ success: true });
    } catch (e: any) {
      logger.error({ error: e?.message, id }, 'Error deleting client');
      return NextResponse.json(
        { error: 'Erreur lors de la suppression', details: e?.message },
        { status: 500 }
      );
    }
  } catch (error: any) {
    logger.error({ error: error?.message }, 'Server error in DELETE endpoint');
    return NextResponse.json(
      { error: 'Erreur serveur', details: error?.message },
>>>>>>> from-master
      { status: 500 }
    );
  }
}
