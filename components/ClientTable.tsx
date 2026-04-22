'use client';

import { useState, useMemo } from 'react';
import Badge from '@/components/ui/Badge';
import {
<<<<<<< HEAD
  Search,
  Edit,
  ExternalLink,
  X,
  Eye,
  EyeOff,
  Calendar,
  Building,
=======
  MagnifyingGlass,
  Pencil,
  ArrowSquareOut,
  X,
  Eye,
  EyeSlash,
  Calendar,
  Buildings,
>>>>>>> from-master
  FileText,
  User,
  MapPin,
  Shield,
  Globe,
  Key,
  Check,
<<<<<<< HEAD
  AlertCircle,
  Zap,
  CheckCircle,
  MessageSquare,
  PenSquare,
  Flag,
  Clock,
  Home,
} from 'lucide-react';

function formatDateFR(dateStr?: string) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function getStatutBadgeColor(statut?: string) {
  if (!statut) return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-600';
  
  const statutLower = statut.toLowerCase();
  
  if (statutLower.includes('accord')) {
    return 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border-emerald-300 dark:from-emerald-900/40 dark:to-green-900/40 dark:text-emerald-400 dark:border-emerald-700';
  }
  if (statutLower.includes('refus')) {
    return 'bg-gradient-to-r from-red-100 to-rose-100 text-red-700 border-red-300 dark:from-red-900/40 dark:to-rose-900/40 dark:text-red-400 dark:border-red-700';
  }
  if (statutLower.includes('abf')) {
    return 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-300 dark:from-orange-900/40 dark:to-amber-900/40 dark:text-orange-400 dark:border-orange-700';
  }
  if (statutLower.includes('en cours') || statutLower.includes('attente')) {
    return 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-300 dark:from-blue-900/40 dark:to-indigo-900/40 dark:text-blue-400 dark:border-blue-700';
  }
  if (statutLower.includes('visé') || statutLower.includes('visite')) {
    return 'bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 border-purple-300 dark:from-purple-900/40 dark:to-violet-900/40 dark:text-purple-400 dark:border-purple-700';
  }
  if (statutLower.includes('transmise') || statutLower.includes('effectuer')) {
    return 'bg-gradient-to-r from-cyan-100 to-sky-100 text-cyan-700 border-cyan-300 dark:from-cyan-900/40 dark:to-sky-900/40 dark:text-cyan-400 dark:border-cyan-700';
  }
  
  return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-600';
}

function getFinancementBadgeColor(financement?: string) {
  if (!financement) return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-600';
  
  if (financement.toLowerCase() === 'sunlib') {
    return 'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 border-yellow-300 dark:from-yellow-900/40 dark:to-amber-900/40 dark:text-yellow-400 dark:border-yellow-700';
  }
  if (financement.toLowerCase() === 'otovo') {
    return 'bg-gradient-to-r from-indigo-100 to-violet-100 text-indigo-700 border-indigo-300 dark:from-indigo-900/40 dark:to-violet-900/40 dark:text-indigo-400 dark:border-indigo-700';
  }
  
  return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-600';
}

function getRaccordementBadgeColor(raccordement?: string) {
  if (!raccordement) return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-600';

  if (raccordement === 'Demande à effectuer') {
    return 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-300 dark:from-orange-900/40 dark:to-amber-900/40 dark:text-orange-400 dark:border-orange-700';
  }
  if (raccordement === 'Demande transmise') {
    return 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-300 dark:from-blue-900/40 dark:to-indigo-900/40 dark:text-blue-400 dark:border-blue-700';
  }
  if (raccordement === 'Mise en service') {
    return 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border-emerald-300 dark:from-emerald-900/40 dark:to-green-900/40 dark:text-emerald-400 dark:border-emerald-700';
  }

  return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-600';
}

function getEtatActuelBadgeColor(etatActuel?: string) {
  if (!etatActuel) return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-600';

  if (etatActuel === "En attente d'instruction") {
    return 'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 border-yellow-300 dark:from-yellow-900/40 dark:to-amber-900/40 dark:text-yellow-400 dark:border-yellow-700';
  }
  if (etatActuel === 'Avis de visite') {
    return 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-300 dark:from-blue-900/40 dark:to-indigo-900/40 dark:text-blue-400 dark:border-blue-700';
  }
  if (etatActuel === 'Consuel visé') {
    return 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border-emerald-300 dark:from-emerald-900/40 dark:to-green-900/40 dark:text-emerald-400 dark:border-emerald-700';
  }

  return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-600';
}

function getTypeConsuelBadgeColor(typeConsuel?: string) {
  if (!typeConsuel) return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-600';

  if (typeConsuel === 'Violet') {
    return 'bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 border-purple-300 dark:from-purple-900/40 dark:to-violet-900/40 dark:text-purple-400 dark:border-purple-700';
  }
  if (typeConsuel === 'Bleu') {
    return 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-300 dark:from-blue-900/40 dark:to-indigo-900/40 dark:text-blue-400 dark:border-blue-700';
  }

  return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-600';
}

function getPrestataireBadgeColor(prestataire?: string) {
  if (!prestataire) return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-600';

  if (prestataire === 'Eversun') {
    return 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border-emerald-300 dark:from-emerald-900/40 dark:to-green-900/40 dark:text-emerald-400 dark:border-emerald-700';
  }
  if (prestataire === 'Projet Solaire') {
    return 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-300 dark:from-orange-900/40 dark:to-amber-900/40 dark:text-orange-400 dark:border-orange-700';
  }

  return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-600';
}

function getCauseNonPresenceBadgeColor(causeNonPresence?: string) {
  if (!causeNonPresence) return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-600';

  if (causeNonPresence === 'Consuel non demandé') {
    return 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-600 border-gray-300 dark:from-gray-800 dark:to-slate-800 dark:text-gray-400 dark:border-gray-700';
  }
  if (causeNonPresence === 'Consuel refusé pour cause technique') {
    return 'bg-gradient-to-r from-red-100 to-rose-100 text-red-700 border-red-300 dark:from-red-900/40 dark:to-rose-900/40 dark:text-red-400 dark:border-red-700';
  }
  if (causeNonPresence === 'Consuel refusé pour cause administrative') {
    return 'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 border-yellow-300 dark:from-yellow-900/40 dark:to-amber-900/40 dark:text-yellow-400 dark:border-yellow-700';
  }
  if (causeNonPresence === 'Consuel envoyé') {
    return 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border-emerald-300 dark:from-emerald-900/40 dark:to-green-900/40 dark:text-emerald-400 dark:border-emerald-700';
  }

  return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-600';
}

import { ClientRecord } from '@/types/client';
=======
  WarningCircle,
  Lightning,
  CheckCircle,
  ChatCircle,
  Pen,
  Flag,
  Clock,
  House,
  Funnel,
  CaretDown,
} from '@phosphor-icons/react';
import { ClientRecord } from '@/types/client';
import {
  formatDateFR,
  getStatutBadgeColor,
  getFinancementBadgeColor,
  getRaccordementBadgeColor,
  getEtatActuelBadgeColor,
  getTypeConsuelBadgeColor,
  getPrestataireBadgeColor,
  getCauseNonPresenceBadgeColor,
} from '@/lib/clientTableUtils';
import ClientModal from '@/components/ClientModal';
import PaginationControls from '@/components/PaginationControls';
import { useClientTableFilters, useClientTablePagination } from '@/hooks/useClientTable';
>>>>>>> from-master

/**
 * Props pour le composant ClientTable
 */
interface ClientTableProps {
  /** Section actuelle (utilise string pour compatibilité avec le code existant) */
  section: string;
  /** Liste des clients à afficher */
  items: ClientRecord[];
  /** Callback pour l'édition d'un client */
  onEdit: (client: ClientRecord) => void;
  /** Callback pour la suppression d'un client */
  onDelete: (id: string) => void;
  /** Callback optionnel pour la sauvegarde directe depuis le tableau */
  onSave?: (client: ClientRecord) => void;
  /** Callback optionnel pour rafraîchir les données */
  onRefresh?: () => void;
}

export default function ClientTable({
  section,
  items,
  onEdit,
  onDelete,
  onSave,
  onRefresh,
}: ClientTableProps) {
<<<<<<< HEAD
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<string>('');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  // Pagination
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<
    'left' | 'right' | null
  >(null);
=======
  // Custom hooks for filters and pagination
  const {
    search,
    setSearch,
    sortKey,
    setSortKey,
    sortDir,
    setSortDir,
    showFilters,
    setShowFilters,
    filterStatus,
    setFilterStatus,
    filterVille,
    setFilterVille,
    filterPrestataire,
    setFilterPrestataire,
    filterFinancement,
    setFilterFinancement,
    filterDateFrom,
    setFilterDateFrom,
    filterDateTo,
    setFilterDateTo,
    filteredItems,
    resetFilters,
  } = useClientTableFilters({ items, section });

  const {
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    isPageTransitioning,
    setIsPageTransitioning,
    transitionDirection,
    setTransitionDirection,
    totalPages,
    handlePageChange,
  } = useClientTablePagination({ totalItems: filteredItems.length });

>>>>>>> from-master
  // Client sélectionné pour la vue détaillée
  const [selectedClient, setSelectedClient] = useState<ClientRecord | null>(
    null
  );
  // États pour la modal
  const [showPassword, setShowPassword] = useState(false);
  const [updateMessage, setUpdateMessage] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const columns: Array<{ key: keyof ClientRecord; label: string }> = [];
  const isDp = section.startsWith('dp');
  const isDpAccordes = section === 'dp-accordes';
  const isDpRefuses = section === 'dp-refuses';
<<<<<<< HEAD
=======
  const isDaact = section === 'daact';
>>>>>>> from-master
  const isConsuelEnCours = section === 'consuel-en-cours';
  const isConsuelFinalise = section === 'consuel-finalise';
  const isConsuel = isConsuelEnCours || isConsuelFinalise;
  const isRaccordement = section === 'raccordement';
  const isRaccordementMes = section === 'raccordement-mes';

  if (isDp) {
    columns.push(
      { key: 'client', label: 'Client' },
      { key: 'dateEnvoi', label: "Date d'envoi" },
      { key: 'dateEstimative', label: 'Date estimative' },
      { key: 'financement', label: 'Financement' },
      { key: 'statut', label: 'Statut' },
      { key: 'noDp', label: 'N° DP' },
      { key: 'ville', label: 'Ville' }
    );
    // Ajouter Portail, Identifiant, Mot de passe seulement si ce n'est pas DP Accordés ou DP Refus
    if (!isDpAccordes && !isDpRefuses) {
      columns.push(
        { key: 'portail', label: 'Portail' },
        { key: 'identifiant', label: 'Identifiant' },
        { key: 'motDePasse', label: 'Mot de passe' }
      );
    }
<<<<<<< HEAD
=======
  } else if (isDaact) {
    columns.push(
      { key: 'client', label: 'Client' },
      { key: 'noDp', label: 'Numéro DP' },
      { key: 'ville', label: 'Ville' },
      { key: 'statut', label: 'DAACT' }
    );
>>>>>>> from-master
  } else if (isConsuelEnCours) {
    columns.push(
      { key: 'client', label: 'Client' },
      { key: 'pvChantier', label: 'PV Chantier' },
      { key: 'causeNonPresence', label: 'Cause de non présence Consuel' },
      { key: 'prestataire', label: 'Prestataire' },
      { key: 'etatActuel', label: 'Etat Actuel' },
      { key: 'typeConsuel', label: 'Type de consuel demandé' },
      { key: 'dateDerniereDemarche', label: 'Date dernière démarche' },
      { key: 'commentaires', label: 'Commentaires' },
      { key: 'dateEstimative', label: 'Date Estimatives' }
    );
  } else if (isConsuelFinalise) {
    columns.push(
      { key: 'client', label: 'Nom' },
      { key: 'pvChantier', label: 'PV Chantier' },
      { key: 'causeNonPresence', label: 'Cause de non présence Consuel' },
      { key: 'prestataire', label: 'Prestataire' },
      { key: 'etatActuel', label: 'Etat Actuel' },
      { key: 'typeConsuel', label: 'Type de consuel demandé' },
      { key: 'dateDerniereDemarche', label: 'Date dernière démarche' },
      { key: 'commentaires', label: 'Commentaires' },
      { key: 'dateEstimative', label: 'Date Estimatives' }
    );
  } else if (isRaccordement) {
    columns.push(
      { key: 'client', label: 'Client' },
      { key: 'prestataire', label: 'Prestataire' },
      { key: 'typeConsuel', label: 'Type de consuel demandé' },
      { key: 'raccordement', label: 'Raccordement' },
      { key: 'dateDerniereDemarche', label: 'Date dernière démarche' },
      { key: 'commentaires', label: 'Commentaires' },
      { key: 'dateEstimative', label: 'Date Estimatives' }
    );
  } else if (isRaccordementMes) {
    columns.push(
      { key: 'client', label: 'Client' },
      { key: 'prestataire', label: 'Prestataire' },
      { key: 'typeConsuel', label: 'Type de consuel demandé' },
      { key: 'raccordement', label: 'Raccordement' },
      { key: 'dateDerniereDemarche', label: 'Date dernière démarche' },
      { key: 'numeroContrat', label: 'Numéro de contrat' },
      { key: 'dateMiseEnService', label: 'Date de Mise en service raccordement' }
    );
  }

<<<<<<< HEAD
  // Recherche globale et tri
  const filtered = useMemo(() => {
    let data = items;
    if (search) {
      const s = search.toLowerCase();
      data = data.filter((item) =>
        columns.some((col) =>
          String(item[col.key] ?? '')
            .toLowerCase()
            .includes(s)
        )
      );
    }
    if (sortKey) {
      data = [...data].sort((a, b) => {
        const va = a[sortKey as keyof ClientRecord];
        const vb = b[sortKey as keyof ClientRecord];
        if (va === vb) return 0;
        if (va == null) return 1;
        if (vb == null) return -1;
        if (sortDir === 'asc') return String(va).localeCompare(String(vb));
        return String(vb).localeCompare(String(va));
      });
    }
    return data;
  }, [items, search, sortKey, sortDir, columns]);

  // Pagination calculée sur filtered
  const totalRows = filtered.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const paginated = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filtered.slice(start, start + rowsPerPage);
  }, [filtered, page, rowsPerPage]);

  const handleClientClick = (client: ClientRecord) => {
    setSelectedClient(client);
    setShowPassword(false);
    setUpdateMessage(null);
=======
  const paginated = filteredItems.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const handleClientClick = (client: ClientRecord) => {
    setSelectedClient(client);
>>>>>>> from-master
  };

  const closeClientDetails = () => {
    setSelectedClient(null);
    setShowPassword(false);
<<<<<<< HEAD
    setUpdateMessage(null);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage === page) return;

    // Déterminer la direction de la transition
    const direction = newPage > page ? 'right' : 'left';
    setTransitionDirection(direction);
    setIsPageTransitioning(true);

    // Changer de page après un court délai
    setTimeout(() => {
      setPage(newPage);
      setIsPageTransitioning(false);
      setTransitionDirection(null);
    }, 150);
=======
>>>>>>> from-master
  };

  return (
    <>
      <div className="w-full overflow-x-auto py-6">
        {/* Header du tableau - Responsive */}
        <div className="mb-6 flex flex-col gap-4">
<<<<<<< HEAD
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              placeholder="Rechercher..."
              className="w-full h-10 pl-10 pr-3 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black placeholder:text-gray-400 transition-colors duration-150 hover:border-gray-400"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <label className="text-gray-700 font-medium text-sm">Lignes</label>
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="h-10 px-3 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors duration-150 hover:border-gray-400 cursor-pointer"
=======

          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-md animate-in slide-in-top duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Statut</label>
                  <input
                    type="text"
                    placeholder="Filtrer par statut"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Ville</label>
                  <input
                    type="text"
                    placeholder="Filtrer par ville"
                    value={filterVille}
                    onChange={(e) => setFilterVille(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Prestataire</label>
                  <input
                    type="text"
                    placeholder="Filtrer par prestataire"
                    value={filterPrestataire}
                    onChange={(e) => setFilterPrestataire(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Financement</label>
                  <input
                    type="text"
                    placeholder="Filtrer par financement"
                    value={filterFinancement}
                    onChange={(e) => setFilterFinancement(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Date estimative (de)</label>
                  <input
                    type="date"
                    value={filterDateFrom}
                    onChange={(e) => setFilterDateFrom(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Date estimative (à)</label>
                  <input
                    type="date"
                    value={filterDateTo}
                    onChange={(e) => setFilterDateTo(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    setFilterStatus('');
                    setFilterVille('');
                    setFilterPrestataire('');
                    setFilterFinancement('');
                    setFilterDateFrom('');
                    setFilterDateTo('');
                  }}
                  className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  Réinitialiser
                </button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-md hover:shadow transition-all duration-200"
                >
                  Appliquer
                </button>
              </div>
            </div>
          )}
          <div className="flex items-center justify-between gap-3">
            <label className="text-gray-700 dark:text-gray-300 font-medium text-sm">Lignes par page</label>
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="h-10 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500 cursor-pointer shadow-sm"
>>>>>>> from-master
            >
              {[5, 10, 20, 50].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tableau moderne - Responsive Design */}
        <div
          className={`rounded-lg shadow-sm bg-white dark:bg-gray-900 border border-border dark:border-gray-700 overflow-hidden transition-all duration-300 ${
            isPageTransitioning
              ? transitionDirection === 'right'
                ? 'opacity-0 transform translateX(-20px)'
                : 'opacity-0 transform translateX(20px)'
              : 'opacity-100 transform translateX(0)'
          }`}
        >
          {/* Desktop/Tablette Table - Horizontal scroll for all columns */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-text-primary dark:text-gray-100">
              <thead>
                <tr className="bg-secondary dark:bg-gray-800 border-b border-border dark:border-gray-700">
                  {columns.map((col, idx) => (
                    <th
                      key={col.key as string}
<<<<<<< HEAD
                      className="px-4 py-3 font-semibold text-left cursor-pointer select-none hover:bg-secondary-dark dark:hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap text-xs uppercase tracking-wider text-text-secondary dark:text-gray-400"
=======
                      className={`px-4 py-3 font-semibold text-left cursor-pointer select-none hover:bg-secondary-dark dark:hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap text-xs uppercase tracking-wider text-text-secondary dark:text-gray-400 ${
                        idx === 0 ? 'sticky left-0 bg-secondary dark:bg-gray-800 z-10 shadow-r' : ''
                      }`}
>>>>>>> from-master
                      onClick={() => setSortKey(col.key as string)}
                    >
                      <div className="flex items-center gap-2">
                        {col.label}
                        {sortKey === col.key && (
                          <span className="text-accent">
                            {sortDir === 'asc' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
<<<<<<< HEAD
                  <th className="px-4 py-3 font-semibold text-center whitespace-nowrap text-xs uppercase tracking-wider text-text-secondary dark:text-gray-400">Actions</th>
=======
>>>>>>> from-master
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 && (
                  <tr>
                    <td
<<<<<<< HEAD
                      colSpan={columns.length + 1}
                      className="text-center py-12 text-text-muted dark:text-gray-500 font-medium"
                    >
                      Aucune donnée trouvée
=======
                      colSpan={columns.length}
                      className="text-center py-16"
                    >
                      <div className="flex flex-col items-center justify-center gap-4">
                        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center">
                          <svg
                            className="w-10 h-10 text-amber-500 dark:text-amber-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                            {search ? 'Aucun résultat trouvé' : 'Aucune donnée disponible'}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            {search ? 'Essayez de modifier votre recherche' : 'Commencez par ajouter votre premier dossier'}
                          </p>
                          {!search && !['dp-accordes', 'dp-refuses', 'consuel-finalise', 'raccordement-mes'].includes(section) && (
                            <button
                              onClick={() => onEdit({} as ClientRecord)}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:from-amber-600 hover:to-orange-600 shadow-md hover:shadow transition-all duration-200 hover:scale-[1.01]"
                            >
                              <svg
                                className="w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                              </svg>
                              Créer un dossier
                            </button>
                          )}
                        </div>
                      </div>
>>>>>>> from-master
                    </td>
                  </tr>
                )}
                {paginated.map((item, idx) => (
                  <tr
                    key={item._id || item.id || idx}
                    className={`group hover:bg-secondary dark:hover:bg-gray-800 transition-colors duration-200 border-b border-border dark:border-gray-700 last:border-b-0 cursor-pointer ${
                      isPageTransitioning
                        ? 'opacity-0 transform translateX(10px)'
                        : 'opacity-100 transform translateX(0)'
                    }`}
                    onClick={() => handleClientClick(item)}
                    style={{
                      animation: isPageTransitioning
                        ? 'none'
                        : `slideIn 0.4s ease-out ${idx * 30}ms forwards`,
                    }}
                  >
<<<<<<< HEAD
                    {columns.map((col) => (
                      <td
                        key={col.key as string}
                        className="px-4 py-4 whitespace-nowrap"
=======
                    {columns.map((col, cellIdx) => (
                      <td
                        key={col.key as string}
                        className={`px-4 py-4 whitespace-nowrap ${
                          cellIdx === 0 ? 'sticky left-0 bg-white dark:bg-gray-900 z-10' : ''
                        }`}
>>>>>>> from-master
                      >
                        {col.key === 'dateEnvoi' ||
                        col.key === 'dateEstimative' ||
                        col.key === 'pvChantier' ||
                        col.key === 'dateDerniereDemarche' ||
                        col.key === 'dateMiseEnService' ? (
                          formatDateFR(item[col.key] as string)
                        ) : col.key === 'portail' &&
                          isDp &&
                          item.portail &&
                          item.portail.startsWith('http') ? (
                          <a
                            href={item.portail}
                            target="_blank"
                            rel="noopener noreferrer"
<<<<<<< HEAD
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-success text-white font-medium hover:bg-success-light transition-colors duration-200 text-xs"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Connexion
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : col.key === 'identifiant' && item.identifiant ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-50 text-accent font-medium text-xs border border-blue-200">
                            <Key className="w-3 h-3" />
=======
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-success text-white font-medium hover:bg-success-light transition-colors duration-200 text-xs"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Connexion
                            <ArrowSquareOut className="w-3 h-3" weight="bold" />
                          </a>
                        ) : col.key === 'identifiant' && item.identifiant ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-50 text-accent font-medium text-xs border border-blue-200">
                            <Key className="w-3 h-3" weight="bold" />
>>>>>>> from-master
                            {item.identifiant}
                          </span>
                        ) : col.key === 'motDePasse' && item.motDePasse ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-red-50 text-error font-medium text-xs border border-red-200">
<<<<<<< HEAD
                              <Key className="w-3 h-3" />
=======
                              <Key className="w-3 h-3" weight="bold" />
>>>>>>> from-master
                              {'********'}
                            </span>
                          ) : col.key === 'statut' && item.statut ? (
                            <span className={`inline-flex items-center px-2 py-1 rounded font-medium text-xs border ${getStatutBadgeColor(item.statut)}`}>
                              {item.statut}
                            </span>
                          ) : col.key === 'financement' && item.financement ? (
                            <span className={`inline-flex items-center px-2 py-1 rounded font-medium text-xs border ${getFinancementBadgeColor(item.financement)}`}>
                              {item.financement}
                            </span>
                          ) : col.key === 'raccordement' && item.raccordement ? (
                            <span className={`inline-flex items-center px-2 py-1 rounded font-medium text-xs border ${getRaccordementBadgeColor(item.raccordement)}`}>
                              {item.raccordement}
                            </span>
                          ) : col.key === 'etatActuel' && item.etatActuel ? (
                            <span className={`inline-flex items-center px-2 py-1 rounded font-medium text-xs border ${getEtatActuelBadgeColor(item.etatActuel)}`}>
                              {item.etatActuel}
                            </span>
                          ) : col.key === 'typeConsuel' && item.typeConsuel ? (
                            <span className={`inline-flex items-center px-2 py-1 rounded font-medium text-xs border ${getTypeConsuelBadgeColor(item.typeConsuel)}`}>
                              {item.typeConsuel}
                            </span>
                          ) : col.key === 'prestataire' && item.prestataire ? (
                            <span className={`inline-flex items-center px-2 py-1 rounded font-medium text-xs border ${getPrestataireBadgeColor(item.prestataire)}`}>
                              {item.prestataire}
                            </span>
                          ) : col.key === 'causeNonPresence' && item.causeNonPresence ? (
                            <span className={`inline-flex items-center px-2 py-1 rounded font-medium text-xs border ${getCauseNonPresenceBadgeColor(item.causeNonPresence)}`}>
                              {item.causeNonPresence}
                            </span>
                          ) : (
                            <span className="font-medium text-text-primary dark:text-gray-100">
                              {(item[col.key] as string) || '-'}
                            </span>
                          )}
                        </td>
                      ))}
<<<<<<< HEAD
                    <td
                      className="px-4 py-4 text-center whitespace-nowrap"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleClientClick(item);
                          }}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-success text-white font-medium hover:bg-success-light transition-colors duration-200"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Voir</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onEdit(item);
                          }}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary text-white font-medium hover:bg-primary-light transition-colors duration-200"
                        >
                          <Edit className="w-4 h-4" />
                          <span>Modifier</span>
                        </button>
                      </div>
                    </td>
=======
>>>>>>> from-master
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<<<<<<< HEAD
          <div
            className={`text-sm text-gray-600 transition-all duration-300 ${
              isPageTransitioning
                ? 'opacity-0 transform scale-[0.95]'
                : 'opacity-100 transform scale-1'
            }`}
          >
            Affichage de {(page - 1) * rowsPerPage + 1} à{' '}
            {Math.min(page * rowsPerPage, totalRows)} sur {totalRows} résultats
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              Précédent
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-3 py-1 rounded-md transition-all duration-200 text-sm ${
                      page === pageNum
                        ? 'bg-blue-600 text-white shadow-sm transform scale-[1.05]'
                        : 'border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 hover:scale-[1.02]'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              Suivant
            </button>
          </div>
=======
          <PaginationControls
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            isPageTransitioning={isPageTransitioning}
          />
>>>>>>> from-master
        </div>
      </div>

      {/* Modal Client Details */}
<<<<<<< HEAD
      {selectedClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedClient(null)}
          />
          <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden border border-gray-200/50 dark:border-gray-700/50 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                    {selectedClient.client}
                  </h2>
                  <Badge className={getStatutBadgeColor(selectedClient.statut)}>
                    {selectedClient.statut || 'Sans statut'}
                  </Badge>
                </div>
              </div>
              <button
                onClick={() => setSelectedClient(null)}
                className="p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110 group"
              >
                <X className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-8 py-6 min-h-0">
              <div className="space-y-6">
                {/* Informations générales */}
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <User className="h-5 w-5 text-teal-500" />
                    Informations générales
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedClient.prestataire && (
                      <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <Building className="h-4 w-4 text-teal-500" />
                        <div>
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Prestataire</p>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {selectedClient.prestataire}
                          </p>
                        </div>
                      </div>
                    )}
                    {selectedClient.dateEnvoi && (
                      <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <Calendar className="h-4 w-4 text-teal-500" />
                        <div>
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Date d'envoi</p>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {formatDateFR(selectedClient.dateEnvoi)}
                          </p>
                        </div>
                      </div>
                    )}
                    {selectedClient.dateEstimative && (
                      <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <Clock className="h-4 w-4 text-teal-500" />
                        <div>
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Date estimative</p>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {formatDateFR(selectedClient.dateEstimative)}
                          </p>
                        </div>
                      </div>
                    )}
                    {selectedClient.financement && (
                      <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <Zap className="h-4 w-4 text-teal-500" />
                        <div>
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Financement</p>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {selectedClient.financement}
                          </p>
                        </div>
                      </div>
                    )}
                    {selectedClient.noDp && (
                      <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <FileText className="h-4 w-4 text-teal-500" />
                        <div>
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Numéro DP</p>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {selectedClient.noDp}
                          </p>
                        </div>
                      </div>
                    )}
                    {selectedClient.ville && (
                      <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <MapPin className="h-4 w-4 text-teal-500" />
                        <div>
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Ville</p>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {selectedClient.ville}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Accès et identifiants - Masqué pour Consuel et Raccordement */}
                {isDp && (
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-teal-500" />
                      Accès et identifiants
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedClient.portail &&
                        selectedClient.portail.startsWith('http') && (
                          <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                            <Globe className="h-4 w-4 text-blue-500" />
                            <div className="flex-1">
                              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Portail</p>
                              <a
                                href={selectedClient.portail}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                              >
                                {selectedClient.portail}
                              </a>
                            </div>
                            <ExternalLink className="h-4 w-4 text-blue-500" />
                          </div>
                        )}
                      {selectedClient.identifiant && (
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                          <Key className="h-4 w-4 text-teal-500" />
                          <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Identifiant</p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {selectedClient.identifiant}
                            </p>
                          </div>
                        </div>
                      )}
                      {selectedClient.motDePasse && (
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                          <Key className="h-4 w-4 text-teal-500" />
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Mot de passe</p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {showPassword ? selectedClient.motDePasse : '••••••••'}
                            </p>
                          </div>
                          <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-500" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-500" />
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Informations Consuel - Affiché uniquement pour Consuel */}
                {section.startsWith('consuel') && (
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-teal-500" />
                      Informations Consuel
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedClient.pvChantier && (
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                          <Calendar className="h-4 w-4 text-teal-500" />
                          <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">PV Chantier</p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {formatDateFR(selectedClient.pvChantier)}
                            </p>
                          </div>
                        </div>
                      )}
                      {selectedClient.causeNonPresence && (
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                          <AlertCircle className="h-4 w-4 text-red-500" />
                          <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Cause de non présence</p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {selectedClient.causeNonPresence}
                            </p>
                          </div>
                        </div>
                      )}
                      {selectedClient.etatActuel && (
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Etat Actuel</p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {selectedClient.etatActuel}
                            </p>
                          </div>
                        </div>
                      )}
                      {selectedClient.typeConsuel && (
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                          <Zap className="h-4 w-4 text-amber-500" />
                          <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Type de consuel</p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {selectedClient.typeConsuel}
                            </p>
                          </div>
                        </div>
                      )}
                      {selectedClient.dateDerniereDemarche && (
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                          <Calendar className="h-4 w-4 text-teal-500" />
                          <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Date dernière démarche</p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {formatDateFR(selectedClient.dateDerniereDemarche)}
                            </p>
                          </div>
                        </div>
                      )}
                      {selectedClient.dateEstimative && (
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                          <Clock className="h-4 w-4 text-teal-500" />
                          <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Date Estimatives</p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {formatDateFR(selectedClient.dateEstimative)}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Commentaires - Affiché pour Consuel, Raccordement et Raccordement MES */}
                {(section.startsWith('consuel') || section === 'raccordement' || section === 'raccordement-mes') && selectedClient.commentaires && (
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-teal-500" />
                      Commentaires
                    </h3>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                      <p className="font-medium text-gray-900 dark:text-white whitespace-pre-wrap">
                        {selectedClient.commentaires}
                      </p>
                    </div>
                  </div>
                )}

                {/* Informations Raccordement - Affiché uniquement pour Raccordement */}
                {section === 'raccordement' && (
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <Flag className="h-5 w-5 text-teal-500" />
                      Raccordement
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedClient.typeConsuel && (
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                          <Zap className="h-4 w-4 text-amber-500" />
                          <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Type de consuel</p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {selectedClient.typeConsuel}
                            </p>
                          </div>
                        </div>
                      )}
                      {selectedClient.raccordement && (
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                          <Flag className="h-4 w-4 text-teal-500" />
                          <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Raccordement</p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {selectedClient.raccordement}
                            </p>
                          </div>
                        </div>
                      )}
                      {selectedClient.dateDerniereDemarche && (
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <Calendar className="h-4 w-4 text-teal-500" />
                        <div>
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Date dernière démarche</p>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {formatDateFR(selectedClient.dateDerniereDemarche)}
                          </p>
                        </div>
                      </div>
                      )}
                      {selectedClient.dateEstimative && (
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <Clock className="h-4 w-4 text-teal-500" />
                        <div>
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Date Estimatives</p>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {formatDateFR(selectedClient.dateEstimative)}
                          </p>
                        </div>
                      </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Informations Raccordement MES - Affiché uniquement pour Raccordement MES */}
                {section === 'raccordement-mes' && (
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <Home className="h-5 w-5 text-teal-500" />
                      Mise en service
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedClient.numeroContrat && (
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                          <FileText className="h-4 w-4 text-teal-500" />
                          <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Numéro de contrat</p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {selectedClient.numeroContrat}
                            </p>
                          </div>
                        </div>
                      )}
                      {selectedClient.dateMiseEnService && (
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                          <Calendar className="h-4 w-4 text-teal-500" />
                          <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Date de Mise en service</p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {formatDateFR(selectedClient.dateMiseEnService)}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 p-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={closeClientDetails}
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors duration-150 font-medium"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  onEdit(selectedClient);
                  closeClientDetails();
                }}
                className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium transition-colors duration-150 hover:bg-blue-700 shadow-sm"
              >
                Modifier
              </button>
            </div>
          </div>
        </div>
      )}
=======
      <ClientModal
        selectedClient={selectedClient}
        onClose={() => setSelectedClient(null)}
        onEdit={onEdit}
        onDelete={onDelete}
        section={section}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
>>>>>>> from-master
    </>
  );
}
