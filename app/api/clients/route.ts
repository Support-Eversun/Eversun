import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongo';
import mongoose from 'mongoose';
import { ClientSchema } from '@/lib/clientModel';
import { clientSchema } from '@/lib/validation';
import { hashPassword } from '@/lib/password';
<<<<<<< HEAD
=======
import logger from '@/lib/logger';
>>>>>>> from-master

/**
 * Fonction de mappage pour transformer les champs français en anglais
 * Utilisée pour les données importées depuis un fichier Excel/CSV
 */
function mapImportedFields(doc: any): any {
  const fieldMapping: Record<string, string> = {
    Client: 'client',
    Nom: 'client',
    nom: 'client',
    'Date d\'envoi DP': 'dateEnvoi',
    'Attente DP': 'dateEstimative',
    Presta: 'prestataire',
    Financement: 'financement',
    Status: 'statut',
    'Numéro DP': 'noDp',
    Ville: 'ville',
    'Site DP': 'portail',
    'Email utilisé': 'identifiant',
    'Mot de passe': 'motDePasse',
    'PV Chantier': 'pvChantier',
    'Cause de non présence Consuel': 'causeNonPresence',
    Prestataire: 'prestataire',
    'Etat Actuel': 'etatActuel',
    'Type de consuel demandé': 'typeConsuel',
    'Date dernière démarche': 'dateDerniereDemarche',
    Commentaires: 'commentaires',
    'Date Estimatives': 'dateEstimative',
<<<<<<< HEAD
    'Raccordement': 'raccordement',
=======
    Raccordement: 'raccordement',
>>>>>>> from-master
    'Numéro de contrat': 'numeroContrat',
    'Date de Mise en service raccordement': 'dateMiseEnService',
  };

  const mapped: any = { ...doc };

  // Mapper les champs français vers anglais
  for (const [frenchKey, englishKey] of Object.entries(fieldMapping)) {
    if (mapped[frenchKey] !== undefined) {
      mapped[englishKey] = mapped[frenchKey];
      delete mapped[frenchKey];
    }
  }

  // Convertir les dates du format français (DD/MM/YYYY) au format ISO
  const convertFrenchDateToISO = (dateStr: string | undefined): string | undefined => {
    if (!dateStr) return undefined;
    // Si déjà au format ISO ou contient des tirets, retourner tel quel
    if (dateStr.includes('-') || dateStr.includes('T')) return dateStr;

    // Format français: DD/MM/YYYY
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      const [day, month, year] = parts;
      return `${year}-${month}-${day}`;
    }
    return dateStr;
  };

  mapped.dateEnvoi = convertFrenchDateToISO(mapped.dateEnvoi);
  mapped.dateEstimative = convertFrenchDateToISO(mapped.dateEstimative);
  mapped.pvChantier = convertFrenchDateToISO(mapped.pvChantier);
  mapped.dateDerniereDemarche = convertFrenchDateToISO(mapped.dateDerniereDemarche);
  mapped.dateMiseEnService = convertFrenchDateToISO(mapped.dateMiseEnService);

  // Si pas de section, déterminer selon le statut
  if (!mapped.section) {
    if (mapped.statut === 'Accord favorable') {
      mapped.section = 'dp-accordes';
    } else if (mapped.statut === 'Refus') {
      mapped.section = 'dp-refuses';
    } else if (mapped.statut === 'ABF') {
      mapped.section = 'dp-en-cours';
    } else {
      mapped.section = 'dp-en-cours';
    }
  }

<<<<<<< HEAD
=======
  // Supprimer tous les anciens champs français qui pourraient encore exister
  const frenchFields = Object.keys(fieldMapping);
  for (const frenchField of frenchFields) {
    if (mapped[frenchField] !== undefined) {
      delete mapped[frenchField];
    }
  }

>>>>>>> from-master
  return mapped;
}

export async function GET(request: Request) {
  try {
    if (!process.env.MONGODB_URI) {
<<<<<<< HEAD
=======
      logger.error('MONGODB_URI not configured');
>>>>>>> from-master
      return NextResponse.json(
        { error: 'MONGODB_URI not configured' },
        { status: 500 }
      );
    }
    await connectToDatabase();

    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
<<<<<<< HEAD
    const limit = parseInt(url.searchParams.get('limit') || '10000');
    const section = url.searchParams.get('section');
    const skip = (page - 1) * limit;

    const collections = [
      { section: 'clients', name: 'clients' },
      { section: 'dp-en-cours', name: 'dp_in_progress' },
      { section: 'dp-accordes', name: 'dp_received' },
      { section: 'dp-refuses', name: 'dp_ko' },
      { section: 'consuel-en-cours', name: 'consuel_in_progress' },
      { section: 'consuel-finalise', name: 'consuel_finalised' },
      { section: 'raccordement', name: 'raccordement' },
      { section: 'raccordement-mes', name: 'raccordement_finalised' },
    ];

    // Filtrer par section si spécifié
    const collectionsToQuery = section
      ? collections.filter((col) => col.section === section)
      : collections;

    let allClients: any[] = [];
    let totalCount = 0;

    for (const col of collectionsToQuery) {
      try {
        const Model =
          mongoose.models[col.name] ||
          mongoose.model(col.name, ClientSchema, col.name);

        // Compter le total pour cette collection
        const count = await Model.countDocuments();
        totalCount += count;

        // Récupérer les documents avec pagination
        const docs = await Model.find().skip(skip).limit(limit).lean();

        allClients = allClients.concat(
          docs.map((doc) => {
            const mapped = mapImportedFields(doc);
            return { ...mapped, section: col.section };
          })
        );
      } catch (err: any) {
        return NextResponse.json(
          {
            error: `Erreur MongoDB sur la collection ${col.name}`,
            details: err?.message || err,
          },
          { status: 500 }
        );
      }
    }

=======
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const section = url.searchParams.get('section');
    const skip = (page - 1) * limit;

    logger.info({ page, limit, section }, 'Fetching clients from API');

    // Use single unified collection
    const collectionName = 'clients';
    const Model =
      mongoose.models[collectionName] ||
      mongoose.model(collectionName, ClientSchema, collectionName);

    // Build query filter
    const filter: any = {};
    if (section) {
      filter.section = section;
    }

    // Count total documents
    const totalCount = await Model.countDocuments(filter);

    // Retrieve documents with pagination
    const docs = await Model.find(filter).skip(skip).limit(limit).lean();

    const allClients = docs.map((doc) => {
      const mapped = mapImportedFields(doc);
      // S'assurer que les vieux champs français ne sont pas dans la réponse
      delete mapped['Client'];
      delete mapped['Nom'];
      delete mapped['nom'];
      delete mapped['Date d\'envoi DP'];
      delete mapped['Attente DP'];
      delete mapped['Presta'];
      delete mapped['Status'];
      delete mapped['Numéro DP'];
      delete mapped['Ville'];
      delete mapped['Site DP'];
      delete mapped['Email utilisé'];
      delete mapped['Mot de passe'];
      delete mapped['PV Chantier'];
      delete mapped['Cause de non présence Consuel'];
      delete mapped['Prestataire'];
      delete mapped['Etat Actuel'];
      delete mapped['Type de consuel demandé'];
      delete mapped['Date dernière démarche'];
      delete mapped['Commentaires'];
      delete mapped['Date Estimatives'];
      delete mapped['Raccordement'];
      delete mapped['Numéro de contrat'];
      delete mapped['Date de Mise en service raccordement'];
      return mapped;
    });

    logger.info({ count: allClients.length, total: totalCount }, 'Clients fetched successfully');

>>>>>>> from-master
    return NextResponse.json({
      data: allClients,
      pagination: {
        page,
        limit,
        total: totalCount,
        totalPages: Math.ceil(totalCount / limit),
      },
    });
  } catch (error: any) {
<<<<<<< HEAD
=======
    logger.error({ error: error?.message, stack: error?.stack }, 'Error fetching clients');
>>>>>>> from-master
    return NextResponse.json(
      { error: error?.message || 'Erreur serveur', stack: error?.stack },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    if (!process.env.MONGODB_URI) {
<<<<<<< HEAD
=======
      logger.error('MONGODB_URI not configured');
>>>>>>> from-master
      return NextResponse.json(
        { error: 'MONGODB_URI not configured' },
        { status: 500 }
      );
    }
    await connectToDatabase();
    const data = await request.json();

<<<<<<< HEAD
    // Validation Zod
    const parseResult = clientSchema.safeParse(data);
    if (!parseResult.success) {
=======
    logger.info({ section: data.section }, 'Creating new client');

    // Validation Zod
    const parseResult = clientSchema.safeParse(data);
    if (!parseResult.success) {
      logger.warn({ errors: parseResult.error.issues }, 'Client validation failed');
>>>>>>> from-master
      return NextResponse.json(
        { error: 'Validation échouée', details: parseResult.error.issues },
        { status: 400 }
      );
    }

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
    const collection =
      sectionToCollection[data.section as keyof typeof sectionToCollection];
    if (!collection) {
      return NextResponse.json({ error: 'Section inconnue' }, { status: 400 });
    }

    try {
      const Model =
        mongoose.models[collection] ||
        mongoose.model(collection, ClientSchema, collection);
      const client = await Model.create(data);
      return NextResponse.json(client);
    } catch (err: any) {
=======
    // Validate section
    const validSections = [
      'clients',
      'dp-en-cours',
      'dp-accordes',
      'dp-refuses',
      'daact',
      'consuel-en-cours',
      'consuel-finalise',
      'raccordement',
      'raccordement-mes',
    ];

    if (!data.section || !validSections.includes(data.section)) {
      logger.warn({ section: data.section }, 'Invalid section provided');
      return NextResponse.json({ error: 'Section invalide' }, { status: 400 });
    }

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

    const cleanData = { ...data };
    for (const field of frenchFieldsToRemove) {
      if (cleanData[field] !== undefined) {
        delete cleanData[field];
      }
    }

    try {
      // Use single unified collection
      const collectionName = 'clients';
      const Model =
        mongoose.models[collectionName] ||
        mongoose.model(collectionName, ClientSchema, collectionName);
      const client = await Model.create(cleanData);
      logger.info({ clientId: client._id, section: data.section }, 'Client created successfully');
      return NextResponse.json(client);
    } catch (err: any) {
      logger.error({ error: err?.message, section: data.section }, 'Error creating client in MongoDB');
>>>>>>> from-master
      return NextResponse.json(
        {
          error: `Erreur MongoDB lors de la création`,
          details: err?.message || err,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
<<<<<<< HEAD
=======
    logger.error({ error: error?.message, stack: error?.stack }, 'Error in POST endpoint');
>>>>>>> from-master
    return NextResponse.json(
      { error: error?.message || 'Erreur serveur', stack: error?.stack },
      { status: 500 }
    );
  }
}

<<<<<<< HEAD
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { error: 'MONGODB_URI not configured' },
        { status: 500 }
      );
    }
    await connectToDatabase();
    const data = await request.json();
    const url = new URL(request.url);
    const section = url.searchParams.get('section');

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
    const collection = section
      ? sectionToCollection[section as keyof typeof sectionToCollection]
      : null;
    if (!collection) {
      return NextResponse.json({ error: 'Section inconnue' }, { status: 400 });
    }

    try {
      const Model =
        mongoose.models[collection] ||
        mongoose.model(collection, ClientSchema, collection);
      const updated = await Model.findByIdAndUpdate(params.id, data, { new: true });
      return NextResponse.json(updated);
    } catch (err: any) {
      return NextResponse.json(
        {
          error: `Erreur MongoDB lors de la mise à jour`,
          details: err?.message || err,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || 'Erreur serveur', stack: error?.stack },
      { status: 500 }
    );
  }
}
=======
>>>>>>> from-master
