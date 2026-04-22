'use client';

import { useEffect, useState } from 'react';
import { ClientRecord, Section } from '@/types/client';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
<<<<<<< HEAD
import Select from '@/components/ui/Select';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import {
  Save,
  X,
  User,
  Building,
  Calendar,
  FileText,
  Zap,
  Info,
  CheckCircle,
  ChevronDown,
  ChevronUp,
=======
import ModernDatePicker from '@/components/ui/ModernDatePicker';
import ModernSelect from '@/components/ui/ModernSelect';
import Badge from '@/components/ui/Badge';
import {
  FloppyDisk,
  X,
  User,
  Buildings,
  Calendar,
  FileText,
  Lightning,
  Info,
  CheckCircle,
  CaretDown,
>>>>>>> from-master
  MapPin,
  Shield,
  Globe,
  Key,
  Clock,
<<<<<<< HEAD
  Phone,
  Mail,
  Home,
  Settings,
} from 'lucide-react';

interface ClientFormProps {
  /** Section dans laquelle le formulaire est utilisé */
  section: Section;
  /** Client à modifier (null pour un nouveau client) */
  client?: ClientRecord | null;
  /** Fonction appelée lors de la sauvegarde du formulaire */
  onSave: (record: ClientRecord) => void;
  /** Fonction appelée lors de la fermeture du formulaire */
  onClose: () => void;
}

const dpStatuts = [
  "En cours d'instruction",
  'ABF',
  'Accord favorable',
  'Accord tacite',
  'Refus',
];
const consuelStatuts = [
  "En attente d'instruction",
  'Avis de visite',
  'Consuel visé',
];
const raccordementStatuts = ['Demande transmise', 'Demande à effectuer'];
const consuelTypes = ['Violet', 'Bleu'];
const prestataires = ['Eversun', 'Projet Solaire'];

export default function ClientForm({
  section,
  client,
  onSave,
  onClose,
}: ClientFormProps) {
  const [form, setForm] = useState<ClientRecord>({
    ...(typeof client?.id === 'number' ? { id: client.id } : {}),
=======
  House,
  Gear,
  CaretRight,
} from '@phosphor-icons/react';

interface ClientFormProps {
  section: Section;
  client?: ClientRecord | null;
  onSave: (record: ClientRecord) => void;
  onClose: () => void;
}

// --- CONFIGURATION DES OPTIONS ---
const dpStatuts = ["En cours d'instruction", 'ABF', 'Accord favorable', 'Accord tacite', 'Refus'];
const consuelStatuts = ["En attente d'instruction", 'Avis de visite', 'Consuel visé'];
const consuelEtatActuelOptions = ['En cours de traitement', 'Consuel Visé', 'Avis de Visite'];
const raccordementStatuts = ['Demande transmise', 'Demande à effectuer'];
const daactStatuts = ['En attente', 'En cours', 'Validé', 'Refusé'];
const prestataires = ['Eversun', 'Projet Solaire'];
const financementOptions = ['Sunlib', 'Otovo', 'Upfront'];
const typeConsuelOptions = ['Violet', 'Bleu'];

function CollapsibleSection({ id, title, icon, children, isCollapsed, onToggle }: { id: string; title: string; icon: React.ReactNode; children: React.ReactNode; isCollapsed: boolean; onToggle: (id: string) => void }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow">
      <div
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors rounded-t-lg cursor-pointer select-none"
        role="button"
        tabIndex={0}
      >
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>
        {isCollapsed ? (
          <CaretRight className="h-5 w-5 text-gray-500 dark:text-gray-400" weight="bold" />
        ) : (
          <CaretDown className="h-5 w-5 text-gray-500 dark:text-gray-400" weight="bold" />
        )}
      </div>
      {!isCollapsed && <div className="px-6 pb-6">{children}</div>}
    </div>
  );
}

export default function ClientForm({ section, client, onSave, onClose }: ClientFormProps) {
  const [form, setForm] = useState<ClientRecord>({
    ...(typeof client?.id === 'number' ? { id: client.id } : {}),
    ...(client?._id ? { _id: client._id } : {}),
>>>>>>> from-master
    section,
    client: client?.client || '',
    prestataire: client?.prestataire || '',
    statut: client?.statut || '',
    dateEnvoi: client?.dateEnvoi ?? '',
    dateEstimative: client?.dateEstimative ?? '',
    financement: client?.financement ?? '',
    noDp: client?.noDp ?? '',
    ville: client?.ville ?? '',
    portail: client?.portail ?? '',
    identifiant: client?.identifiant ?? '',
    motDePasse: client?.motDePasse ?? '',
    type: client?.type ?? '',
    pvChantier: client?.pvChantier ?? '',
    causeNonPresence: client?.causeNonPresence ?? '',
    etatActuel: client?.etatActuel ?? '',
    typeConsuel: client?.typeConsuel ?? '',
    dateDerniereDemarche: client?.dateDerniereDemarche ?? '',
    commentaires: client?.commentaires ?? '',
    raccordement: client?.raccordement ?? '',
    numeroContrat: client?.numeroContrat ?? '',
    dateMiseEnService: client?.dateMiseEnService ?? '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isEditing, setIsEditing] = useState(false);
<<<<<<< HEAD

  useEffect(() => {
    if (!isEditing) {
      setForm({
        ...(client?._id ? { _id: client._id } : {}),
        ...(typeof client?.id === 'number' ? { id: client.id } : {}),
        section,
        client: client?.client || '',
        prestataire: client?.prestataire || '',
        statut: client?.statut || '',
        dateEnvoi: client?.dateEnvoi ?? '',
        dateEstimative: client?.dateEstimative ?? '',
        financement: client?.financement ?? '',
        noDp: client?.noDp ?? '',
        ville: client?.ville ?? '',
        portail: client?.portail ?? '',
        identifiant: client?.identifiant ?? '',
        motDePasse: client?.motDePasse ?? '',
        type: client?.type ?? '',
        pvChantier: client?.pvChantier ?? '',
        causeNonPresence: client?.causeNonPresence ?? '',
        etatActuel: client?.etatActuel ?? '',
        typeConsuel: client?.typeConsuel ?? '',
        dateDerniereDemarche: client?.dateDerniereDemarche ?? '',
        commentaires: client?.commentaires ?? '',
        raccordement: client?.raccordement ?? '',
        numeroContrat: client?.numeroContrat ?? '',
        dateMiseEnService: client?.dateMiseEnService ?? '',
      });
    }
  }, [client, section, isEditing]);

  const handleChange = (key: keyof ClientRecord, value: string) => {
    setIsEditing(true);
    setForm((prev) => {
      const next = { ...prev, [key]: value };

      if (section.startsWith('dp') && key === 'dateEnvoi' && value) {
=======
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());

  const isDp = section.startsWith('dp');
  const isDaact = section === 'daact';
  const isConsuel = section.startsWith('consuel');
  const isRaccordement = section === 'raccordement';
  const isRaccordementMes = section === 'raccordement-mes';

  // Conversion des listes de statuts en options
  const getStatutOptions = () => {
    if (isDp) return dpStatuts.map(s => ({ value: s, label: s }));
    if (isDaact) return daactStatuts.map(s => ({ value: s, label: s }));
    if (isConsuel) return consuelStatuts.map(s => ({ value: s, label: s }));
    if (isRaccordement || isRaccordementMes) return raccordementStatuts.map(s => ({ value: s, label: s }));
    return [];
  };

  const financementOptionsFormatted = financementOptions.map(f => ({ value: f, label: f }));
  const typeConsuelOptionsFormatted = typeConsuelOptions.map(t => ({ value: t, label: t }));
  const consuelEtatActuelOptionsFormatted = consuelEtatActuelOptions.map(e => ({ value: e, label: e }));
  const prestataireOptions = prestataires.map(p => ({ value: p, label: p }));
  const statutOptions = getStatutOptions();

  const toggleSection = (sectionId: string) => {
    setCollapsedSections((prev) => {
      const newSet = new Set(prev);
      newSet.has(sectionId) ? newSet.delete(sectionId) : newSet.add(sectionId);
      return newSet;
    });
  };

  const handleChange = (key: keyof ClientRecord, value: string) => {
    // Ne pas modifier les dates estimatives
    if (key === 'dateEstimative') {
      return;
    }

    setIsEditing(true);
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      
      // Logique automatique pour DP
      if (isDp && key === 'dateEnvoi' && value) {
>>>>>>> from-master
        const d = new Date(value);
        if (!isNaN(d.getTime())) {
          d.setMonth(d.getMonth() + (prev.statut === 'ABF' ? 2 : 1));
          next.dateEstimative = d.toISOString().slice(0, 10);
        }
      }
<<<<<<< HEAD
=======
      
      // Logique automatique pour Consuel (calcul de date estimative)
      if (isConsuel && key === 'dateDerniereDemarche' && value) {
        const d = new Date(value);
        if (!isNaN(d.getTime())) {
          // Ajouter 2 semaines pour Bleu, 4 semaines pour Violet
          const weeksToAdd = prev.typeConsuel === 'Bleu' ? 2 : 4;
          d.setDate(d.getDate() + (weeksToAdd * 7));
          next.dateEstimative = d.toISOString().slice(0, 10);
        }
      }
      
      // Recalculer au changement de typeConsuel
      if (isConsuel && key === 'typeConsuel' && prev.dateDerniereDemarche) {
        const d = new Date(prev.dateDerniereDemarche);
        if (!isNaN(d.getTime())) {
          const weeksToAdd = value === 'Bleu' ? 2 : 4;
          d.setDate(d.getDate() + (weeksToAdd * 7));
          next.dateEstimative = d.toISOString().slice(0, 10);
        }
      }
>>>>>>> from-master

      if (section.startsWith('dp') && key === 'statut') {
        if (value === 'ABF' && prev.dateEnvoi) {
          const d = new Date(prev.dateEnvoi);
          if (!isNaN(d.getTime())) {
            d.setMonth(d.getMonth() + 2);
            next.dateEstimative = d.toISOString().slice(0, 10);
          }
        }
      }

      return next;
    });
<<<<<<< HEAD

    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.client.trim()) {
      newErrors.client = 'Le nom du client est requis';
    }

    if (!section.startsWith('dp') && !form.prestataire?.trim()) {
      newErrors.prestataire = 'Le prestataire est requis';
    }

    if (section.startsWith('dp') && !form.statut?.trim()) {
      newErrors.statut = 'Le statut est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatDateInput = (dateStr: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '';
    const tzOffset = d.getTimezoneOffset() * 60000;
    const localISO = new Date(d.getTime() - tzOffset)
      .toISOString()
      .slice(0, 10);
    return localISO;
=======
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }));
>>>>>>> from-master
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const { id, ...rest } = form;
      
      let finalSection = section;
      if (section === 'consuel-en-cours' && form.etatActuel === 'Consuel OK') {
        finalSection = 'consuel-finalise';
      }

      if (section === 'raccordement' && form.raccordement === 'Mise en service') {
        finalSection = 'raccordement-mes';
      }

      const formToSend: ClientRecord = {
        ...rest,
        section: finalSection,
        dateEnvoi: formatDateInput(form.dateEnvoi ?? ''),
        dateEstimative: formatDateInput(form.dateEstimative ?? ''),
        pvChantier: formatDateInput(form.pvChantier ?? ''),
        dateDerniereDemarche: formatDateInput(form.dateDerniereDemarche ?? ''),
        dateMiseEnService: formatDateInput(form.dateMiseEnService ?? ''),
        raccordement: form.raccordement ?? '',
        numeroContrat: form.numeroContrat ?? '',
        typeConsuel: form.typeConsuel ?? '',
        causeNonPresence: form.causeNonPresence ?? '',
        etatActuel: form.etatActuel ?? '',
        commentaires: form.commentaires ?? '',
      };

      setIsEditing(false);
      onSave(formToSend);
      onClose();
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDp = section.startsWith('dp');
  const isConsuel = section.startsWith('consuel');
  const isRaccordement = section === 'raccordement';
  const isRaccordementMes = section === 'raccordement-mes';

  const prestataireOptions = prestataires.map((p) => ({ value: p, label: p }));
  const statutOptions = isDp
    ? dpStatuts.map((s) => ({ value: s, label: s }))
    : isConsuel
      ? consuelStatuts.map((s) => ({ value: s, label: s }))
      : isRaccordement
        ? raccordementStatuts.map((s) => ({ value: s, label: s }))
        : [];
  const financementOptions = ['Sunlib', 'Otovo'].map((f) => ({
    value: f,
    label: f,
  }));
  const typeOptions = consuelTypes.map((t) => ({ value: t, label: t }));

  const getSectionIcon = () => {
    if (isDp) return <FileText className="h-5 w-5" />;
    if (isConsuel) return <Zap className="h-5 w-5" />;
    if (isRaccordement) return <Building className="h-5 w-5" />;
    return <User className="h-5 w-5" />;
  };

  const getSectionColor = () => {
    if (isDp) return 'bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 border-teal-300 dark:from-teal-900/40 dark:to-cyan-900/40 dark:text-teal-400 dark:border-teal-700';
    if (isConsuel) return 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border-emerald-300 dark:from-emerald-900/40 dark:to-green-900/40 dark:text-emerald-400 dark:border-emerald-700';
    if (isRaccordement)
      return 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-300 dark:from-orange-900/40 dark:to-amber-900/40 dark:text-orange-400 dark:border-orange-700';
    return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-600';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden border border-gray-200/50 dark:border-gray-700/50 flex flex-col">
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg">
              {getSectionIcon()}
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                {client ? 'Modifier le client' : 'Ajouter un client'}
              </h2>
              <Badge className={getSectionColor()}>
                {section.replace('-', ' ').toUpperCase()}
              </Badge>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110 group"
          >
            <X className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6 min-h-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            {section.startsWith('consuel') && form.etatActuel === 'Consuel OK' && (
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 border border-teal-200 dark:border-teal-700 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  <span className="text-sm font-semibold text-teal-800 dark:text-teal-200">
                    Ce dossier sera automatiquement déplacé vers "Consuel Finalisé"
                  </span>
                </div>
              </div>
            )}
            {section === 'raccordement' && form.raccordement === 'Mise en service' && (
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 border border-emerald-200 dark:border-emerald-700 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">
                    Ce dossier sera automatiquement déplacé vers "Raccordement MES"
                  </span>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <User className="h-5 w-5 text-teal-500" />
                Informations générales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {!isDp && (
                  <Select
                    label="Prestataire *"
                    value={form.prestataire}
                    onChange={(e) => handleChange('prestataire', e.target.value)}
                    options={prestataireOptions}
                    placeholder="Sélectionner un prestataire"
                    required
                    error={errors.prestataire}
                    icon={<Building className="h-4 w-4" />}
                  />
                )}

=======
    setIsSubmitting(true);
    // Simulation d'envoi
    setTimeout(() => {
      onSave(form);
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  // --- LOGIQUE DES COULEURS DYNAMIQUE ---
  const getSectionColor = () => {
    if (isDp) return 'bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 border-teal-300 dark:from-teal-900/40 dark:to-cyan-900/40 dark:text-teal-400 dark:border-teal-700';
    if (isDaact) return 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border-emerald-300 dark:from-emerald-900/40 dark:to-green-900/40 dark:text-emerald-400 dark:border-emerald-700';
    
    // Spécifique Consuel / Raccordement avec distinction Bleu
    if (isConsuel || isRaccordement) {
      if (form.typeConsuel === 'Bleu') {
        return 'bg-gradient-to-r from-violet-100 to-blue-100 text-blue-700 border-blue-300 dark:from-violet-900/40 dark:to-blue-900/40 dark:text-blue-400 dark:border-blue-700';
      }
      return 'bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 border-purple-300 dark:from-purple-900/40 dark:to-violet-900/40 dark:text-purple-400 dark:border-purple-700';
    }

    if (isRaccordementMes) return 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-300 dark:from-orange-900/40 dark:to-amber-900/40 dark:text-orange-400 dark:border-orange-700';
    return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-600';
  };

  const getSectionIcon = () => {
    if (isDp) return <FileText className="h-5 w-5" weight="bold" />;
    if (isDaact) return <CheckCircle className="h-5 w-5" weight="bold" />;
    if (isConsuel) return <Lightning className="h-5 w-5" weight="bold" />;
    if (isRaccordement) return <Buildings className="h-5 w-5" weight="bold" />;
    return <User className="h-5 w-5" weight="bold" />;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
      <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col">
        
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md">
              {getSectionIcon()}
            </div>
            <div>
              <h2 className="text-2xl font-bold dark:text-white">
                {client ? 'Modifier le client' : 'Ajouter un client'}
              </h2>
              <Badge className={getSectionColor()}>
                {section.replace('-', ' ').toUpperCase()} {form.typeConsuel && `(${form.typeConsuel.toUpperCase()})`}
              </Badge>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
            <X className="w-6 h-6 text-gray-500" weight="bold" />
          </button>
        </div>

        {/* FORM BODY */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* SECTION GENERALE */}
            <CollapsibleSection id="general" title="Informations générales" icon={<User className="h-5 w-5 text-teal-500" weight="bold" />} isCollapsed={collapsedSections.has('general')} onToggle={toggleSection}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {!isDp && (
                  <ModernSelect
                    label="Prestataire *"
                    value={form.prestataire}
                    onChange={(value) => handleChange('prestataire', value)}
                    options={prestataireOptions}
                    placeholder="Sélectionner un prestataire"
                    error={errors.prestataire}
                    icon={<Buildings className="h-4 w-4" weight="bold" />}
                  />
                )}
>>>>>>> from-master
                <Input
                  label="Client *"
                  value={form.client}
                  onChange={(e) => handleChange('client', e.target.value)}
                  placeholder="Nom du client"
                  required
                  error={errors.client}
<<<<<<< HEAD
                  icon={<User className="h-4 w-4" />}
=======
                  icon={<User className="h-4 w-4" weight="bold" />}
>>>>>>> from-master
                  name="client"
                />

                {isDp && (
<<<<<<< HEAD
                  <Select
                    label="Statut *"
                    value={form.statut}
                    onChange={(e) => handleChange('statut', e.target.value)}
                    options={statutOptions}
                    placeholder="Sélectionner un statut"
                    required
=======
                  <ModernSelect
                    label="Statut *"
                    value={form.statut}
                    onChange={(value) => handleChange('statut', value)}
                    options={statutOptions}
                    placeholder="Sélectionner un statut"
>>>>>>> from-master
                    error={errors.statut}
                  />
                )}
              </div>
<<<<<<< HEAD
            </div>

            {isDp && (
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-teal-500" />
                  Dates et financement
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Date d'envoi"
                    type="date"
                    value={form.dateEnvoi}
                    onChange={(e) => handleChange('dateEnvoi', e.target.value)}
                    icon={<Calendar className="h-4 w-4" />}
                    name="dateEnvoi"
                  />
                  <Input
                    label="Date estimative"
                    type="date"
                    value={form.dateEstimative}
                    onChange={(e) => handleChange('dateEstimative', e.target.value)}
                    helperText="Calculée automatiquement selon le statut"
                    icon={<Clock className="h-4 w-4" />}
                    name="dateEstimative"
                  />
                  <Select
                    label="Financement"
                    value={form.financement}
                    onChange={(e) => handleChange('financement', e.target.value)}
                    options={financementOptions}
                    placeholder="Sélectionner un financement"
                  />
                </div>
              </div>
            )}

            {isDp && (
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Settings className="h-5 w-5 text-teal-500" />
                  Détails du projet
                </h3>
=======
            </CollapsibleSection>

            {isDaact && (
              <CollapsibleSection id="daact" title="Détails DAACT" icon={<CheckCircle className="h-5 w-5 text-teal-500" weight="bold" />} isCollapsed={collapsedSections.has('daact')} onToggle={toggleSection}>
>>>>>>> from-master
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Numéro DP"
                    value={form.noDp}
                    onChange={(e) => handleChange('noDp', e.target.value)}
                    placeholder="Numéro de déclaration"
<<<<<<< HEAD
                    icon={<FileText className="h-4 w-4" />}
=======
                    icon={<FileText className="h-4 w-4" weight="bold" />}
>>>>>>> from-master
                    name="noDp"
                  />
                  <Input
                    label="Ville"
                    value={form.ville}
                    onChange={(e) => handleChange('ville', e.target.value)}
                    placeholder="Ville du projet"
<<<<<<< HEAD
                    icon={<MapPin className="h-4 w-4" />}
=======
                    icon={<MapPin className="h-4 w-4" weight="bold" />}
                    name="ville"
                  />
                  <ModernSelect
                    label="DAACT *"
                    value={form.statut}
                    onChange={(value) => handleChange('statut', value)}
                    options={statutOptions}
                    placeholder="Sélectionner un statut DAACT"
                    error={errors.statut}
                  />
                </div>
              </CollapsibleSection>
            )}

            {isDp && (
              <CollapsibleSection id="dates" title="Dates et financement" icon={<Calendar className="h-5 w-5 text-teal-500" weight="bold" />} isCollapsed={collapsedSections.has('dates')} onToggle={toggleSection}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ModernDatePicker
                    label="Date d'envoi"
                    value={form.dateEnvoi}
                    onChange={(value) => handleChange('dateEnvoi', value)}
                    icon={<Calendar className="h-4 w-4" weight="bold" />}
                    name="dateEnvoi"
                  />
                  <ModernDatePicker
                    label="Date estimative"
                    value={form.dateEstimative}
                    onChange={(value) => handleChange('dateEstimative', value)}
                    helperText="Calculée automatiquement selon le statut"
                    icon={<Clock className="h-4 w-4" weight="bold" />}
                    name="dateEstimative"
                    disabled
                  />
                  <ModernSelect
                    label="Financement"
                    value={form.financement}
                    onChange={(value) => handleChange('financement', value)}
                    options={financementOptionsFormatted}
                    placeholder="Sélectionner un financement"
                  />
                </div>
              </CollapsibleSection>
            )}

            {isDp && (
              <CollapsibleSection id="parameters" title="Paramètres" icon={<Gear className="h-5 w-5 text-teal-500" weight="bold" />} isCollapsed={collapsedSections.has('parameters')} onToggle={toggleSection}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Numéro DP"
                    value={form.noDp}
                    onChange={(e) => handleChange('noDp', e.target.value)}
                    placeholder="Numéro de déclaration"
                    icon={<FileText className="h-4 w-4" weight="bold" />}
                    name="noDp"
                  />
                  <Input
                    label="Ville"
                    value={form.ville}
                    onChange={(e) => handleChange('ville', e.target.value)}
                    placeholder="Ville du projet"
                    icon={<MapPin className="h-4 w-4" weight="bold" />}
>>>>>>> from-master
                    name="ville"
                  />
                  <Input
                    label="Portail"
                    value={form.portail}
                    onChange={(e) => handleChange('portail', e.target.value)}
                    placeholder="Nom du portail"
<<<<<<< HEAD
                    icon={<Globe className="h-4 w-4" />}
=======
                    icon={<Globe className="h-4 w-4" weight="bold" />}
>>>>>>> from-master
                    name="portail"
                  />
                  <Input
                    label="Identifiant"
                    value={form.identifiant}
                    onChange={(e) => handleChange('identifiant', e.target.value)}
                    placeholder="Identifiant de connexion"
<<<<<<< HEAD
                    icon={<Shield className="h-4 w-4" />}
=======
                    icon={<Shield className="h-4 w-4" weight="bold" />}
>>>>>>> from-master
                    name="identifiant"
                  />
                  <Input
                    label="Mot de passe"
                    type="password"
                    value={form.motDePasse}
                    onChange={(e) => handleChange('motDePasse', e.target.value)}
                    placeholder="Mot de passe"
<<<<<<< HEAD
                    icon={<Key className="h-4 w-4" />}
                    name="motDePasse"
                  />
                </div>
              </div>
            )}

            {isConsuel && (
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-teal-500" />
                  Détails Consuel
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="PV Chantier"
                    type="date"
                    value={form.pvChantier}
                    onChange={(e) => handleChange('pvChantier', e.target.value)}
                    icon={<Calendar className="h-4 w-4" />}
                    name="pvChantier"
                  />
                  <Select
                    label="Cause de non présence Consuel"
                    value={form.causeNonPresence}
                    onChange={(e) => handleChange('causeNonPresence', e.target.value)}
=======
                    icon={<Key className="h-4 w-4" weight="bold" />}
                    name="motDePasse"
                  />
                </div>
              </CollapsibleSection>
            )}

            {isConsuel && (
              <CollapsibleSection id="consuel" title="Détails Consuel" icon={<Lightning className="h-5 w-5 text-purple-500" weight="bold" />} isCollapsed={collapsedSections.has('consuel')} onToggle={toggleSection}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ModernDatePicker
                    label="PV Chantier"
                    value={form.pvChantier}
                    onChange={(value) => handleChange('pvChantier', value)}
                    icon={<Calendar className="h-4 w-4" weight="bold" />}
                    name="pvChantier"
                  />
                  <ModernSelect
                    label="Cause de non présence Consuel"
                    value={form.causeNonPresence}
                    onChange={(value) => handleChange('causeNonPresence', value)}
>>>>>>> from-master
                    options={[
                      { value: 'Consuel non demandé', label: 'Consuel non demandé' },
                      { value: 'Consuel refusé pour cause technique', label: 'Consuel refusé pour cause technique' },
                      { value: 'Consuel refusé pour cause administrative', label: 'Consuel refusé pour cause administrative' },
                      { value: 'Consuel envoyé', label: 'Consuel envoyé' },
                    ]}
                    placeholder="Sélectionner une cause"
                  />
<<<<<<< HEAD
                  <Select
                    label="Etat Actuel"
                    value={form.etatActuel}
                    onChange={(e) => handleChange('etatActuel', e.target.value)}
                    options={[
                      { value: 'Demande en cours', label: 'Demande en cours' },
                      { value: 'Demande à effectuer', label: 'Demande à effectuer' },
                      { value: 'Nouvelle demande à faire', label: 'Nouvelle demande à faire' },
                      { value: 'Nouvelle demande en cours', label: 'Nouvelle demande en cours' },
                      { value: 'En attente retour des demande en cours', label: 'En attente retour des demande en cours' },
                      { value: 'Consuel OK', label: 'Consuel OK' },
                      { value: 'Avis de Visite', label: 'Avis de Visite' },
                    ]}
                    placeholder="Sélectionner un état"
                  />
                  <Select
                    label="Type de consuel demandé"
                    value={form.typeConsuel}
                    onChange={(e) => handleChange('typeConsuel', e.target.value)}
                    options={[
                      { value: 'Violet', label: 'Violet' },
                      { value: 'Bleu', label: 'Bleu' },
                    ]}
                    placeholder="Sélectionner un type"
                  />
                  <Input
                    label="Date dernière démarche"
                    type="date"
                    value={form.dateDerniereDemarche}
                    onChange={(e) => handleChange('dateDerniereDemarche', e.target.value)}
                    icon={<Calendar className="h-4 w-4" />}
                    name="dateDerniereDemarche"
                  />
                  <Input
                    label="Date Estimatives"
                    type="date"
                    value={form.dateEstimative}
                    onChange={(e) => handleChange('dateEstimative', e.target.value)}
                    icon={<Clock className="h-4 w-4" />}
                    name="dateEstimative"
                  />
                </div>
              </div>
            )}

            {(isConsuel || isRaccordement || isRaccordementMes) && (
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-teal-500" />
                  Commentaires
                </h3>
                <Input
                  label="Commentaires"
                  value={form.commentaires}
                  onChange={(e) => handleChange('commentaires', e.target.value)}
                  placeholder="Ajouter des commentaires..."
                  name="commentaires"
                />
              </div>
            )}

            {isRaccordement && (
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Building className="h-5 w-5 text-teal-500" />
                  Raccordement
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Select
                    label="Type de consuel demandé"
                    value={form.typeConsuel}
                    onChange={(e) => handleChange('typeConsuel', e.target.value)}
                    options={[
                      { value: 'Violet', label: 'Violet' },
                      { value: 'Bleu', label: 'Bleu' },
                    ]}
                    placeholder="Sélectionner un type"
                  />
                  <Select
                    label="Raccordement"
                    value={form.raccordement}
                    onChange={(e) => handleChange('raccordement', e.target.value)}
=======
                  <ModernSelect
                    label="Etat Actuel"
                    value={form.etatActuel}
                    onChange={(value) => handleChange('etatActuel', value)}
                    options={consuelEtatActuelOptionsFormatted}
                  />
                  <ModernSelect
                    label="Type de consuel demandé"
                    value={form.typeConsuel}
                    onChange={(value) => handleChange('typeConsuel', value)}
                    options={typeConsuelOptionsFormatted}
                    placeholder="Sélectionner un type"
                  />
                  <ModernDatePicker
                    label="Date dernière démarche"
                    value={form.dateDerniereDemarche}
                    onChange={(value) => handleChange('dateDerniereDemarche', value)}
                    icon={<Calendar className="h-4 w-4" weight="bold" />}
                    name="dateDerniereDemarche"
                  />
                  <ModernDatePicker
                    label="Date Estimatives"
                    value={form.dateEstimative}
                    onChange={(value) => handleChange('dateEstimative', value)}
                    icon={<Clock className="h-4 w-4" weight="bold" />}
                    name="dateEstimative"
                    disabled
                  />
                </div>
              </CollapsibleSection>
            )}

            {/* SECTION RACCORDEMENT */}
            {isRaccordement && (
              <CollapsibleSection id="raccordement" title="Raccordement" icon={<Buildings className="h-5 w-5 text-orange-500" weight="bold" />} isCollapsed={collapsedSections.has('raccordement')} onToggle={toggleSection}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ModernSelect
                    label="Type de consuel demandé"
                    value={form.typeConsuel}
                    onChange={(value) => handleChange('typeConsuel', value)}
                    options={typeConsuelOptionsFormatted}
                    placeholder="Sélectionner un type"
                  />
                  <ModernSelect
                    label="Raccordement"
                    value={form.raccordement}
                    onChange={(value) => handleChange('raccordement', value)}
>>>>>>> from-master
                    options={[
                      { value: 'Demande à effectuer', label: 'Demande à effectuer' },
                      { value: 'Demande transmise', label: 'Demande transmise' },
                      { value: 'Mise en service', label: 'Mise en service' },
                    ]}
                    placeholder="Sélectionner un raccordement"
                  />
<<<<<<< HEAD
                  <Input
                    label="Date dernière démarche"
                    type="date"
                    value={form.dateDerniereDemarche}
                    onChange={(e) => handleChange('dateDerniereDemarche', e.target.value)}
                    icon={<Calendar className="h-4 w-4" />}
                    name="dateDerniereDemarche"
                  />
                  <Input
                    label="Date Estimatives"
                    type="date"
                    value={form.dateEstimative}
                    onChange={(e) => handleChange('dateEstimative', e.target.value)}
                    icon={<Clock className="h-4 w-4" />}
                    name="dateEstimative"
                  />
                </div>
              </div>
            )}

            {isRaccordementMes && (
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Home className="h-5 w-5 text-teal-500" />
                  Mise en service
                </h3>
=======
                  <ModernDatePicker
                    label="Date dernière démarche"
                    value={form.dateDerniereDemarche}
                    onChange={(value) => handleChange('dateDerniereDemarche', value)}
                    icon={<Calendar className="h-4 w-4" weight="bold" />}
                    name="dateDerniereDemarche"
                  />
                  <ModernDatePicker
                    label="Date Estimatives"
                    value={form.dateEstimative}
                    onChange={(value) => handleChange('dateEstimative', value)}
                    icon={<Clock className="h-4 w-4" weight="bold" />}
                    name="dateEstimative"
                    disabled
                  />
                </div>
              </CollapsibleSection>
            )}

            {isRaccordementMes && (
              <CollapsibleSection id="mes" title="Mise en service" icon={<House className="h-5 w-5 text-teal-500" weight="bold" />} isCollapsed={collapsedSections.has('mes')} onToggle={toggleSection}>
>>>>>>> from-master
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Numéro de contrat"
                    value={form.numeroContrat}
                    onChange={(e) => handleChange('numeroContrat', e.target.value)}
                    placeholder="Numéro de contrat"
<<<<<<< HEAD
                    icon={<FileText className="h-4 w-4" />}
                    name="numeroContrat"
                  />
                  <Input
                    label="Date de Mise en service"
                    type="date"
                    value={form.dateMiseEnService}
                    onChange={(e) => handleChange('dateMiseEnService', e.target.value)}
                    icon={<Calendar className="h-4 w-4" />}
                    name="dateMiseEnService"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {form.statut === 'Accord favorable' && (
=======
                    icon={<FileText className="h-4 w-4" weight="bold" />}
                    name="numeroContrat"
                  />
                  <ModernDatePicker
                    label="Date de Mise en service"
                    value={form.dateMiseEnService}
                    onChange={(value) => handleChange('dateMiseEnService', value)}
                    icon={<Calendar className="h-4 w-4" weight="bold" />}
                    name="dateMiseEnService"
                  />
                </div>
              </CollapsibleSection>
            )}

            <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                {(form.statut === 'Accord favorable' || form.statut === 'Accord tacite') && (
>>>>>>> from-master
                  <Badge className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700 animate-pulse">
                    ⚠️ Déplacement vers "DP Accordés"
                  </Badge>
                )}
                {form.statut === 'Refus' && (
                  <Badge className="bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-700 animate-pulse">
                    ⚠️ Déplacement vers "DP Refus"
                  </Badge>
                )}
<<<<<<< HEAD
=======
                {isConsuel && form.causeNonPresence === 'Consuel envoyé' && form.etatActuel === 'Consuel Visé' && (
                  <Badge className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-700 animate-pulse">
                    ⚠️ Déplacement vers "Consuel Finalisé"
                  </Badge>
                )}
>>>>>>> from-master
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  disabled={isSubmitting}
<<<<<<< HEAD
                  icon={<X className="h-4 w-4" />}
=======
                  icon={<X className="h-4 w-4" weight="bold" />}
>>>>>>> from-master
                >
                  Annuler
                </Button>
                <Button
                  type="submit"
                  loading={isSubmitting}
<<<<<<< HEAD
                  icon={isSubmitting ? null : <Save className="h-4 w-4" />}
=======
                  icon={isSubmitting ? null : <FloppyDisk className="h-4 w-4" weight="bold" />}
>>>>>>> from-master
                >
                  {isSubmitting
                    ? 'Enregistrement...'
                    : client
                      ? 'Mettre à jour'
                      : 'Ajouter'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
