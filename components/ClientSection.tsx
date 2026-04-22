'use client';

import { useMemo, useState, useEffect } from 'react';
import ClientTable from '@/components/ClientTable';
<<<<<<< HEAD
=======
import ClientGrid from '@/components/ClientGrid';
import ClientCalendar from '@/components/ClientCalendar';
>>>>>>> from-master
import ClientForm from '@/components/ClientForm';
import Button from '@/components/ui/Button';
import ConfirmDialog from '@/components/ui/ConfirmDialog';
import { GridSkeleton, TableSkeleton } from '@/components/ui/Skeleton';
<<<<<<< HEAD
import { ClientRecord, Section } from '@/types/client';
import { toast } from '@/store/useToastStore';
import { useAppStore } from '@/store/useAppStore';
=======
import EmptyState from '@/components/ui/EmptyState';
import { ClientRecord, Section } from '@/types/client';
import { toast, useToastStore } from '@/store/useToastStore';
import { useAppStore } from '@/store/useAppStore';
import { useUndoStore } from '@/store/useUndoStore';
>>>>>>> from-master
import {
  Plus,
  FileText,
  CheckCircle,
  XCircle,
  Circle,
<<<<<<< HEAD
  Zap,
  Flag,
  Table,
  Grid3x3,
  Calendar,
  RefreshCw,
  Search,
  Building,
  MapPin,
  Clock,
} from 'lucide-react';
=======
  Lightning,
  Flag,
  Table,
  GridFour,
  Calendar,
  ArrowClockwise,
  MagnifyingGlass,
  Buildings,
  MapPin,
  Clock,
  CheckSquare,
} from '@phosphor-icons/react';
>>>>>>> from-master

interface ClientSectionProps {
  /** Section à afficher */
  section: Section;
}

export default function ClientSection({ section }: ClientSectionProps) {
  const [showForm, setShowForm] = useState(false);
  const [editingClient, setEditingClient] = useState<ClientRecord | null>(null);
  const [clients, setClients] = useState<ClientRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('table');
  const [isTabTransitioning, setIsTabTransitioning] = useState(false);
  const [displayedTab, setDisplayedTab] = useState<string>('table');
<<<<<<< HEAD
  const [deleteConfirm, setDeleteConfirm] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { setSectionCounts, addNotification } = useAppStore();
=======
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { setSectionCounts, addNotification } = useAppStore();
  const { pushUndoAction, undoLastAction } = useUndoStore();
  const { addToast } = useToastStore();
>>>>>>> from-master

  useEffect(() => {
    setLoading(true);
    setError(null);
<<<<<<< HEAD
    fetch('/api/clients')
=======
    fetch('/api/clients?limit=10000')
>>>>>>> from-master
      .then((res) => res.json())
      .then((response) => {
        // Gérer le nouveau format de réponse avec data et pagination
        const data = response.data || response;
        setClients(
          Array.isArray(data)
            ? data.map((item) => ({ ...item, id: item._id || item.id }))
            : []
        );
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erreur de chargement:', err);
        setError('Erreur de chargement des données');
        setLoading(false);
      });
  }, []);

  // Calculer et mettre à jour les comptes de sections
  useEffect(() => {
    const counts: Record<string, number> = {};
    const allSections: Section[] = [
      'clients',
      'dp-en-cours',
      'dp-accordes',
      'dp-refuses',
<<<<<<< HEAD
=======
      'daact',
>>>>>>> from-master
      'consuel-en-cours',
      'consuel-finalise',
      'raccordement',
      'raccordement-mes',
    ];

    allSections.forEach((sectionId) => {
      counts[sectionId] = clients.filter((c) => c.section === sectionId).length;
    });

    setSectionCounts(counts);
  }, [clients, setSectionCounts]);

  // Vérifier les dates estimatives pour DP En Cours et déclencher des notifications
  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dpEnCoursClients = clients.filter((c) => c.section === 'dp-en-cours' && c.dateEstimative);

    dpEnCoursClients.forEach((client) => {
      if (client.dateEstimative) {
        const estimatedDate = new Date(client.dateEstimative);
        estimatedDate.setHours(0, 0, 0, 0);

        const diffTime = estimatedDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // Si la date estimative est demain (diffDays === 1)
        if (diffDays === 1) {
          const notificationMessage = `Accord tacite de ${client.client} - Date estimative: ${new Date(client.dateEstimative).toLocaleDateString('fr-FR')}`;
          addNotification(notificationMessage);
        }
      }
    });
  }, [clients, addNotification]);

  const sectionTitle = useMemo(() => {
    const titles: { [key in Section]: string } = {
      clients: 'Clients',
      'dp-en-cours': 'Déclaration Préalable – En cours',
      'dp-accordes': 'Déclaration Préalable – Accordés',
      'dp-refuses': 'Déclaration Préalable – Refus',
<<<<<<< HEAD
=======
      'daact': 'Déclaration attestant l\'achèvement et la conformité des travaux',
>>>>>>> from-master
      'consuel-en-cours': 'Consuel – En cours',
      'consuel-finalise': 'Consuel – Finalisé',
      raccordement: 'Raccordement',
      'raccordement-mes': 'Raccordement – Mise En Service',
    };
    return titles[section];
  }, [section]);

  const sectionIcon = useMemo(() => {
    const icons: { [key in Section]: React.ReactNode } = {
<<<<<<< HEAD
      clients: <FileText className="h-6 w-6" />,
      'dp-en-cours': <FileText className="h-6 w-6" />,
      'dp-accordes': <CheckCircle className="h-6 w-6" />,
      'dp-refuses': <XCircle className="h-6 w-6" />,
      'consuel-en-cours': <Circle className="h-6 w-6" />,
      'consuel-finalise': <CheckCircle className="h-6 w-6" />,
      raccordement: <Zap className="h-6 w-6" />,
      'raccordement-mes': <Flag className="h-6 w-6" />,
=======
      clients: <FileText className="h-6 w-6" weight="bold" />,
      'dp-en-cours': <FileText className="h-6 w-6" weight="bold" />,
      'dp-accordes': <CheckCircle className="h-6 w-6" weight="bold" />,
      'dp-refuses': <XCircle className="h-6 w-6" weight="bold" />,
      'daact': <CheckSquare className="h-6 w-6" weight="bold" />,
      'consuel-en-cours': <Circle className="h-6 w-6" weight="bold" />,
      'consuel-finalise': <CheckCircle className="h-6 w-6" weight="bold" />,
      raccordement: <Lightning className="h-6 w-6" weight="bold" />,
      'raccordement-mes': <Flag className="h-6 w-6" weight="bold" />,
>>>>>>> from-master
    };
    return icons[section];
  }, [section]);

  const sectionColor = useMemo(() => {
    const colors: { [key in Section]: string } = {
      clients: 'from-teal-500 to-cyan-500',
      'dp-en-cours': 'from-teal-500 to-cyan-500',
      'dp-accordes': 'from-emerald-500 to-green-500',
      'dp-refuses': 'from-red-500 to-rose-500',
<<<<<<< HEAD
=======
      'daact': 'from-emerald-500 to-green-500',
>>>>>>> from-master
      'consuel-en-cours': 'from-teal-500 to-cyan-500',
      'consuel-finalise': 'from-emerald-500 to-green-500',
      raccordement: 'from-teal-500 to-cyan-500',
      'raccordement-mes': 'from-emerald-500 to-green-500',
    };
    return colors[section];
  }, [section]);

  const sectionItems = useMemo(() => {
    let items = section === 'clients' ? clients : clients.filter((clientItem) => clientItem.section === section);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter((item) =>
        Object.values(item).some(
          (value) =>
            value &&
            typeof value === 'string' &&
            value.toLowerCase().includes(query)
        )
      );
    }

    return items;
  }, [clients, section, searchQuery]);

  const totalDpEnCours = clients.filter(
    (c) => c.section === 'dp-en-cours'
  ).length;
  const totalDpAccordes = clients.filter(
    (c) => c.section === 'dp-accordes'
  ).length;
  const totalDpRefus = clients.filter((c) => c.section === 'dp-refuses').length;
  const totalConsuelEnCours = clients.filter(
    (c) => c.section === 'consuel-en-cours'
  ).length;
  const totalConsuelFinalise = clients.filter(
    (c) => c.section === 'consuel-finalise'
  ).length;
  const totalRaccordementEnCours = clients.filter(
    (c) => c.section === 'raccordement'
  ).length;
  const totalRaccordementFinalise = clients.filter(
    (c) => c.section === 'raccordement-mes'
  ).length;

  // Calculate status counts for the current section
  const getStatusCounts = () => {
    const counts: Record<string, number> = {};
    sectionItems.forEach((item) => {
      let key: string;
      if (section.startsWith('consuel')) {
        key = item.etatActuel || 'Non défini';
      } else if (section.startsWith('raccordement')) {
        key = item.raccordement || 'Non défini';
      } else {
        key = item.statut || 'Non défini';
      }
      counts[key] = (counts[key] || 0) + 1;
    });
    return counts;
  };

  const statusCounts = getStatusCounts();

  const onSave = async (record: ClientRecord) => {
    // Si on change de section (ex : Accord favorable ou Refus), il faut créer dans la nouvelle collection et supprimer dans l'ancienne
    const toSave = { ...record };
    const oldSection = section;
    let newSection = record.section;
<<<<<<< HEAD
    if (section === 'dp-en-cours' && record.statut === 'Accord favorable') {
=======
    if (section === 'dp-en-cours' && (record.statut === 'Accord favorable' || record.statut === 'Accord tacite')) {
>>>>>>> from-master
      toSave.section = 'dp-accordes';
      newSection = 'dp-accordes';
    }
    if (section === 'dp-en-cours' && record.statut === 'Refus') {
      toSave.section = 'dp-refuses';
      newSection = 'dp-refuses';
    }
<<<<<<< HEAD
    // Cas déplacement de collection
    if (record._id && oldSection !== newSection) {
      // 1. Créer dans la nouvelle collection
      const { _id, id, ...toSend } = toSave;
      const res = await fetch('/api/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(toSend),
      });
      if (res.ok) {
        const saved = await res.json();
        // 2. Supprimer dans l'ancienne collection
        await fetch(`/api/clients/${record._id}?section=${oldSection}`, {
          method: 'DELETE',
        });
        setClients((prev) =>
          prev.filter((item) => item._id !== record._id).concat(saved)
        );

        // Forcer le rechargement des données pour synchroniser
        await forceRefresh();
        toast.success('Dossier déplacé avec succès');
      } else {
        toast.error('Erreur lors du déplacement du dossier');
      }
      return;
    }
    // Cas édition normale
    if (record._id) {
      const { id, ...toSend } = toSave;
      const sectionToSend = toSave.section;
      const res = await fetch(
        `/api/clients/${record._id}?section=${sectionToSend}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(toSend),
        }
      );
      if (res.ok) {
        const saved = await res.json();
        setClients((prev) =>
          prev.map((item) => (item._id === saved._id ? saved : item))
        );

        // Forcer le rechargement des données pour synchroniser
        await forceRefresh();
        toast.success('Dossier mis à jour avec succès');
      } else {
        toast.error('Erreur lors de la mise à jour du dossier');
      }
    } else {
      const { id, _id, ...toSend } = toSave;
      const res = await fetch('/api/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(toSend),
      });
      if (res.ok) {
        const saved = await res.json();
        setClients((prev) => [...prev, saved]);

        // Forcer le rechargement des données pour synchroniser
        await forceRefresh();
        toast.success('Dossier créé avec succès');
      } else {
        toast.error('Erreur lors de la création du dossier');
=======
    // Logique Consuel: si "Consuel envoyé" ET "Consuel Visé", déplacer vers Consuel Finalisé
    if (section === 'consuel-en-cours' && record.causeNonPresence === 'Consuel envoyé' && record.etatActuel === 'Consuel Visé') {
      toSave.section = 'consuel-finalise';
      newSection = 'consuel-finalise';
    }
    // Cas déplacement de collection
    if (record._id && oldSection !== newSection) {
      // Optimistic UI: Update immediately
      const previousClients = [...clients];
      const optimisticRecord = { ...toSave, _id: record._id };
      setClients((prev) =>
        prev.map((item) => (item._id === record._id ? optimisticRecord : item))
      );
      
      // 1. Créer dans la nouvelle collection
      const { _id, id, ...toSend } = toSave;
      try {
        const res = await fetch('/api/clients', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(toSend),
        });
        if (res.ok) {
          const saved = await res.json();
          // 2. Supprimer dans l'ancienne collection
          const deleteRes = await fetch(`/api/clients/${record._id}?section=${oldSection}`, {
            method: 'DELETE',
          });
          if (deleteRes.ok) {
            setClients((prev) =>
              prev.map((item) => (item._id === saved._id ? saved : item))
            );
            toast.success(`${record.client} a été déplacé vers ${newSection.replace('-', ' ').toUpperCase()}`);
          } else {
            // Revert on error
            setClients(previousClients);
            toast.error('Erreur lors de la suppression dans l\'ancienne section');
          }
        } else {
          // Revert on error
          setClients(previousClients);
          const error = await res.json();
          toast.error(`Impossible de mettre à jour ${record.client}: ${error.error || 'Erreur inconnue'}`);
        }
      } catch (error) {
        // Revert on error
        setClients(previousClients);
        console.error('Erreur lors de la mise à jour:', error);
        toast.error('Erreur de connexion au serveur');
      }
      return;
    }
    // Cas mise à jour simple - Optimistic UI
    if (record._id) {
      const previousClients = [...clients];
      const optimisticRecord = { ...toSave, _id: record._id };
      setClients((prev) =>
        prev.map((item) => (item._id === record._id ? optimisticRecord : item))
      );
      
      const { id, ...toSend } = toSave;
      try {
        const res = await fetch(`/api/clients/${record._id}?section=${section}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(toSend),
        });
        if (res.ok) {
          const saved = await res.json();
          setClients((prev) =>
            prev.map((item) => (item._id === saved._id ? saved : item))
          );
          toast.success(`${record.client} a été mis à jour avec succès`);
        } else {
          // Revert on error
          setClients(previousClients);
          const error = await res.json();
          toast.error(`Impossible de mettre à jour ${record.client}: ${error.error || 'Erreur inconnue'}`);
        }
      } catch (error) {
        // Revert on error
        setClients(previousClients);
        console.error('Erreur lors de la mise à jour:', error);
        toast.error('Erreur de connexion au serveur');
      }
    } else {
      // Cas création - Optimistic UI
      const previousClients = [...clients];
      const tempId = `temp-${Date.now()}`;
      const optimisticRecord = { ...toSave, _id: tempId };
      setClients((prev) => [...prev, optimisticRecord]);
      
      const { id, _id, ...toSend } = toSave;
      try {
        const res = await fetch('/api/clients', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(toSend),
        });
        if (res.ok) {
          const saved = await res.json();
          setClients((prev) =>
            prev.map((item) => (item._id === tempId ? saved : item))
          );
          toast.success(`${saved.client} a été créé avec succès`);
        } else {
          // Revert on error
          setClients(previousClients);
          const error = await res.json();
          toast.error(`Impossible de créer le dossier: ${error.error || 'Erreur inconnue'}`);
        }
      } catch (error) {
        // Revert on error
        setClients(previousClients);
        console.error('Erreur lors de la création:', error);
        toast.error('Erreur de connexion au serveur');
>>>>>>> from-master
      }
    }
  };

  const onDelete = async (_id: string) => {
    const client = clients.find((c) => c._id === _id);
    if (client) {
<<<<<<< HEAD
      setDeleteConfirm({ id: _id, name: client.client || 'ce dossier' });
    }
  };

  const confirmDelete = async () => {
    if (!deleteConfirm) return;

    const client = clients.find((c) => c._id === deleteConfirm.id);
    const section = client?.section;
    const res = await fetch(
      `/api/clients/${deleteConfirm.id}?section=${section}`,
      {
        method: 'DELETE',
      }
    );
    if (res.ok) {
      setClients((prev) =>
        prev.filter((item) => item._id !== deleteConfirm.id)
      );
      await forceRefresh();
      toast.success('Dossier supprimé avec succès');
    } else {
      toast.error('Erreur lors de la suppression du dossier');
    }
    setDeleteConfirm(null);
=======
      // Store client for undo before deletion
      const clientCopy = { ...client };
      const section = client.section;
      
      // Optimistic UI: Remove from UI immediately
      const previousClients = [...clients];
      setClients((prev) => prev.filter((item) => item._id !== _id));
      
      try {
        const res = await fetch(
          `/api/clients/${_id}?section=${section}`,
          {
            method: 'DELETE',
          }
        );
        if (res.ok) {
          // Push undo action
          pushUndoAction({
            type: 'delete',
            data: {
              client: clientCopy,
              oldSection: section,
            },
            description: `Suppression de ${client.client}`,
          });
          
          addToast('success', `${client.client} a été supprimé avec succès`, 5000, {
            onUndo: async () => {
              const lastAction = undoLastAction();
              if (lastAction && lastAction.type === 'delete') {
                // Restore the deleted client
                try {
                  const restoreRes = await fetch('/api/clients', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(lastAction.data.client),
                  });
                  if (restoreRes.ok) {
                    const restored = await restoreRes.json();
                    setClients((prev) => [...prev, restored]);
                    toast.success(`${restored.client} a été restauré`);
                  }
                } catch (error) {
                  console.error('Erreur lors de la restauration:', error);
                  toast.error('Impossible de restaurer le dossier');
                }
              }
            },
          });
        } else {
          // Revert optimistic update on error
          setClients(previousClients);
          const error = await res.json();
          toast.error(`Impossible de supprimer ${client.client}: ${error.error || 'Erreur inconnue'}`);
        }
      } catch (error) {
        // Revert optimistic update on error
        setClients(previousClients);
        console.error('Erreur lors de la suppression:', error);
        toast.error('Erreur de connexion au serveur');
      }
    }
>>>>>>> from-master
  };

  const openAddForm = () => {
    setEditingClient(null);
    setShowForm(true);
  };

  const openEditForm = (client: ClientRecord) => {
    setEditingClient(client);
    setShowForm(true);
  };

  // Ajouter une fonction pour forcer le rechargement des données
  const forceRefresh = async () => {
    setLoading(true);
    try {
<<<<<<< HEAD
      const res = await fetch('/api/clients');
=======
      const res = await fetch('/api/clients?limit=10000');
>>>>>>> from-master
      const response = await res.json();

      // Gérer le nouveau format de réponse avec data et pagination
      const data = response.data || response;
      const processedData = Array.isArray(data)
        ? data.map((item) => ({ ...item, id: item._id || item.id }))
        : [];

      setClients(processedData);
    } catch (error) {
<<<<<<< HEAD
      setError('Erreur de chargement des données');
=======
      console.error('Erreur lors du rafraîchissement:', error);
      setError('Erreur lors du rafraîchissement des données');
>>>>>>> from-master
    } finally {
      setLoading(false);
    }
  };

  // Animation de transition d'onglets
  useEffect(() => {
    if (activeTab !== displayedTab) {
      setIsTabTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayedTab(activeTab);
        setIsTabTransitioning(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [activeTab, displayedTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4 md:p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Header de section moderne */}
      {loading ? (
        <div className="space-y-6">
<<<<<<< HEAD
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
=======
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-lg p-6 md:p-8 shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
>>>>>>> from-master
              <div className="flex-1 space-y-2">
                <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
              </div>
            </div>
          </div>
          {displayedTab === 'table' ? <TableSkeleton rows={5} /> : <GridSkeleton items={8} />}
        </div>
      ) : (
<<<<<<< HEAD
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 rounded-2xl p-6 md:p-8 mb-6 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
            <div className="flex items-start gap-5">
              <div
                className={`p-4 rounded-2xl bg-gradient-to-br ${sectionColor} text-white shadow-xl transform hover:scale-105 transition-all duration-300`}
=======
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-lg p-6 md:p-8 mb-6 shadow-md">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
            <div className="flex items-start gap-5">
              <div
                className={`p-4 rounded-lg bg-gradient-to-br ${sectionColor} text-white shadow-md transform hover:scale-[1.01] transition-all duration-200`}
>>>>>>> from-master
              >
                {sectionIcon}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
                  {sectionTitle}
                </h1>
                <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
                  <div className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full text-sm font-bold shadow-lg">
=======
                  <div className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg text-sm font-bold shadow-md">
>>>>>>> from-master
                    {sectionItems.length}{' '}
                    {sectionItems.length === 1 ? 'dossier' : 'dossiers'}
                  </div>
                  {/* Statistiques par statut pour la section actuelle */}
                  {Object.entries(statusCounts).map(([statut, count]) => (
<<<<<<< HEAD
                    <div key={statut} className="px-3 py-2 bg-gradient-to-r from-teal-400 to-cyan-400 text-white rounded-full text-sm font-semibold shadow-md">
=======
                    <div key={statut} className="px-3 py-2 bg-gradient-to-r from-teal-400 to-cyan-400 text-white rounded-lg text-sm font-semibold shadow-md">
>>>>>>> from-master
                      {count} {statut}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative flex-1 sm:w-72">
<<<<<<< HEAD
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
=======
                <MagnifyingGlass className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" weight="bold" />
>>>>>>> from-master
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600"
=======
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600"
>>>>>>> from-master
                />
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={forceRefresh}
                  variant="outline"
                  loading={loading}
<<<<<<< HEAD
                  icon={<RefreshCw className="w-4 h-4" />}
                  title="Rafraîchir les données"
                  className="rounded-xl"
=======
                  icon={<ArrowClockwise className="w-4 h-4" weight="bold" />}
                  title="Rafraîchir les données"
                  className="rounded-lg"
>>>>>>> from-master
                >
                  Rafraîchir
                </Button>
                {section !== 'dp-accordes' && section !== 'dp-refuses' && section !== 'consuel-finalise' && section !== 'raccordement-mes' && (
<<<<<<< HEAD
                  <Button onClick={openAddForm} icon={<Plus className="w-4 h-4" />} className="rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600">
=======
                  <Button onClick={openAddForm} icon={<Plus className="w-4 h-4" weight="bold" />} className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
>>>>>>> from-master
                    Nouveau dossier
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation par onglets */}
<<<<<<< HEAD
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 rounded-2xl p-2 mb-6 shadow-xl">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleTabChange('table')}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'table'
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg transform scale-105'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-teal-100 hover:to-cyan-100 dark:hover:from-teal-900/30 dark:hover:to-cyan-900/30'
            }`}
          >
            <Table className="w-4 h-4" />
=======
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-lg p-2 mb-6 shadow-md">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleTabChange('table')}
            className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'table'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md transform scale-105'
                : 'text-gray-600 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900/30'
            }`}
          >
            <Table className="h-4 w-4" weight="bold" />
>>>>>>> from-master
            Tableau
          </button>
          <button
            onClick={() => handleTabChange('grid')}
<<<<<<< HEAD
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'grid'
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg transform scale-105'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-teal-100 hover:to-cyan-100 dark:hover:from-teal-900/30 dark:hover:to-cyan-900/30'
            }`}
          >
            <Grid3x3 className="w-4 h-4" />
            Grille
          </button>
          {section !== 'dp-accordes' && section !== 'dp-refuses' && (
            <button
              onClick={() => handleTabChange('calendar')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'calendar'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-teal-100 hover:to-cyan-100 dark:hover:from-teal-900/30 dark:hover:to-cyan-900/30'
              }`}
            >
              <Calendar className="w-4 h-4" />
=======
            className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'grid'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md transform scale-105'
                : 'text-gray-600 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900/30'
            }`}
          >
            <GridFour className="h-4 w-4" weight="bold" />
            Grille
          </button>
          {(section === 'dp-en-cours') && (
            <button
              onClick={() => handleTabChange('calendar')}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'calendar'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md transform scale-105'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900/30'
              }`}
            >
              <Calendar className="h-4 w-4" weight="bold" />
>>>>>>> from-master
              Calendrier
            </button>
          )}
        </div>
      </div>

      {/* Contenu selon l'onglet actif */}
      <div
<<<<<<< HEAD
        className={`bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 rounded-2xl p-6 shadow-xl transition-all duration-300 ${
=======
        className={`bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md transition-all duration-200 ${
>>>>>>> from-master
          isTabTransitioning
            ? 'opacity-0 transform translateX(10px)'
            : 'opacity-100 transform translateX(0)'
        }`}
      >
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 fade-in">
<<<<<<< HEAD
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 flex items-center justify-center mb-4 animate-spin">
              <div className="w-6 h-6 border-3 border-teal-300 dark:border-teal-600 border-t-teal-600 dark:border-t-teal-400 rounded-full"></div>
            </div>
=======
            <svg
              className="animate-spin h-12 w-12 text-amber-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
>>>>>>> from-master
            <p className="text-gray-600 dark:text-gray-400 font-bold text-lg">
              Chargement des données...
            </p>
          </div>
        ) : error ? (
<<<<<<< HEAD
          <div className="flex flex-col items-center justify-center py-16 fade-in">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30 flex items-center justify-center mb-4">
              <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-bold text-lg">
              {error}
            </p>
          </div>
=======
          <EmptyState
            type="error"
            title={error}
            description="Une erreur est survenue lors du chargement des données"
            action={{
              label: 'Réessayer',
              onClick: forceRefresh,
              icon: <ArrowClockwise className="h-5 w-5" weight="bold" />,
            }}
          />
        ) : sectionItems.length === 0 ? (
          <EmptyState
            type={searchQuery ? 'no-results' : 'no-data'}
            title={searchQuery ? 'Aucun résultat' : 'Aucun dossier'}
            description={
              searchQuery
                ? 'Aucun dossier ne correspond à votre recherche'
                : 'Commencez par ajouter votre premier dossier'
            }
            action={
              section !== 'dp-accordes' &&
              section !== 'dp-refuses' &&
              section !== 'consuel-finalise' &&
              section !== 'raccordement-mes'
                ? {
                    label: 'Nouveau dossier',
                    onClick: openAddForm,
                    icon: <Plus className="h-5 w-5" weight="bold" />,
                  }
                : undefined
            }
          />
>>>>>>> from-master
        ) : (
          <div
            className={`transition-all duration-300 ${
              isTabTransitioning
                ? 'opacity-0 transform translateX(10px)'
                : 'opacity-100 transform translateX(0)'
            }`}
          >
            {displayedTab === 'table' && (
              <div className="slide-in">
                <ClientTable
                  section={section}
                  items={sectionItems}
                  onEdit={openEditForm}
                  onDelete={onDelete}
                  onSave={onSave}
                  onRefresh={forceRefresh}
                />
              </div>
            )}
            {displayedTab === 'grid' && (
<<<<<<< HEAD
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sectionItems.map((client, index) => (
                    <div
                      key={client.id}
                      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-105 group"
                      onClick={() => openEditForm(client)}
                      style={{
                        animation: `slideIn 0.5s ease-out ${index * 60}ms`
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white truncate">
                          {client.client}
                        </h3>
                        {client.statut && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/40 dark:to-cyan-900/40 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-700 shadow-sm">
                            {client.statut}
                          </span>
                        )}
                      </div>
                      <div className="space-y-3 text-sm">
                        {client.prestataire && (
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-900/30">
                              <Building className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 truncate">
                              {client.prestataire}
                            </span>
                          </div>
                        )}
                        {client.dateEnvoi && (
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-900/30">
                              <Calendar className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">
                              {new Date(client.dateEnvoi).toLocaleDateString('fr-FR')}
                            </span>
                          </div>
                        )}
                        {client.ville && (
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-900/30">
                              <MapPin className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 truncate">
                              {client.ville}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openEditForm(client);
                          }}
                          className="text-sm font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setDeleteConfirm({ id: String(client.id), name: client.client });
                          }}
                          className="text-sm font-bold text-red-500 hover:text-red-600 transition-colors"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
=======
              <div className="slide-in">
                <ClientGrid
                  section={section}
                  items={sectionItems}
                  onEdit={openEditForm}
                  onDelete={onDelete}
                />
>>>>>>> from-master
              </div>
            )}
            {displayedTab === 'calendar' && (
              <div className="slide-in">
<<<<<<< HEAD
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Dossiers par date d'échéance
                  </h3>
                  {sectionItems.filter(c => c.dateEstimative).length === 0 ? (
                    <div className="text-center py-16">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 font-medium">
                        Aucun dossier avec date estimative
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {sectionItems
                        .filter(c => c.dateEstimative)
                        .sort((a, b) => new Date(a.dateEstimative!).getTime() - new Date(b.dateEstimative!).getTime())
                        .map((client) => {
                          const estimatedDate = new Date(client.dateEstimative!);
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          estimatedDate.setHours(0, 0, 0, 0);
                          const diffDays = Math.ceil((estimatedDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
                          
                          let urgencyColor = 'from-gray-500 to-gray-600';
                          let urgencyLabel = 'À venir';
                          
                          if (diffDays < 0) {
                            urgencyColor = 'from-red-500 to-rose-600';
                            urgencyLabel = 'En retard';
                          } else if (diffDays === 0) {
                            urgencyColor = 'from-red-500 to-orange-500';
                            urgencyLabel = "Aujourd'hui";
                          } else if (diffDays <= 3) {
                            urgencyColor = 'from-orange-500 to-amber-500';
                            urgencyLabel = 'Urgent';
                          } else if (diffDays <= 7) {
                            urgencyColor = 'from-yellow-500 to-amber-500';
                            urgencyLabel = 'Proche';
                          } else {
                            urgencyColor = 'from-emerald-500 to-green-500';
                            urgencyLabel = 'À venir';
                          }
                          
                          const isUrgent = diffDays <= 3 && diffDays >= 0;
                          
                          return (
                            <div
                              key={client.id}
                              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-[1.02] relative"
                              onClick={() => openEditForm(client)}
                            >
                              {isUrgent && section === 'dp-en-cours' && (
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                  <span className="text-white text-xs font-bold">!</span>
                                </div>
                              )}
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${urgencyColor} text-white shadow-lg`}>
                                      <Calendar className="h-6 w-6" />
                                    </div>
                                    <div>
                                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                                        {client.client}
                                      </h4>
                                      {client.prestataire && (
                                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                          {client.prestataire}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                                    {estimatedDate.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                                  </p>
                                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${urgencyColor} text-white shadow-md mt-2`}>
                                    {urgencyLabel} {diffDays >= 0 && `(${diffDays}j)`}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
=======
                <ClientCalendar
                  section={section}
                  items={sectionItems}
                  onEdit={openEditForm}
                />
>>>>>>> from-master
              </div>
            )}
            {displayedTab === 'stats' && (
              <div className="slide-in">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Statistiques de la section
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<<<<<<< HEAD
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
=======
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow transition-all duration-200 hover:scale-[1.01]">
>>>>>>> from-master
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Total</span>
                        <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md">
                          <FileText className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {sectionItems.length}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Dossiers</p>
                    </div>

<<<<<<< HEAD
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
=======
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow transition-all duration-200 hover:scale-[1.01]">
>>>>>>> from-master
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Validés</span>
                        <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {
                          sectionItems.filter(
                            (c) =>
                              c.statut?.includes('Accord') ||
                              c.statut?.includes('Validé') ||
                              c.statut?.includes('Terminé') ||
                              c.statut?.includes('MES')
                          ).length
                        }
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Dossiers terminés</p>
                    </div>

<<<<<<< HEAD
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
=======
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow transition-all duration-200 hover:scale-[1.01]">
>>>>>>> from-master
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">En cours</span>
                        <div className="p-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md">
                          <Clock className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {
                          sectionItems.filter(
                            (c) =>
                              c.statut?.includes('En cours') ||
                              c.statut?.includes('Attente')
                          ).length
                        }
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">En traitement</p>
                    </div>

<<<<<<< HEAD
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
=======
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow transition-all duration-200 hover:scale-[1.01]">
>>>>>>> from-master
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Refusés</span>
                        <div className="p-2 rounded-lg bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-md">
                          <XCircle className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {
                          sectionItems.filter(
                            (c) =>
                              c.statut?.includes('Refus') ||
                              c.statut?.includes('Rejet')
                          ).length
                        }
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Dossiers refusés</p>
                    </div>
                  </div>

                  {/* Statistiques par statut */}
<<<<<<< HEAD
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md">
=======
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-md">
>>>>>>> from-master
                    <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-4">
                      Répartition par statut
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(statusCounts).map(([statut, count]) => {
                        const percentage = sectionItems.length > 0 ? (count / sectionItems.length) * 100 : 0;
                        const colors = [
                          'from-indigo-500 to-purple-500',
                          'from-emerald-500 to-green-500',
                          'from-amber-500 to-orange-500',
                          'from-cyan-500 to-blue-500',
                          'from-pink-500 to-rose-500',
                        ];
                        const colorIndex = Object.keys(statusCounts).indexOf(statut) % colors.length;
                        
                        return (
                          <div key={statut}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{statut}</span>
                              <span className="text-sm font-bold text-gray-900 dark:text-white">{count} ({percentage.toFixed(1)}%)</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                              <div
                                className={`h-2 rounded-full bg-gradient-to-r ${colors[colorIndex]} shadow-md transition-all duration-500`}
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Statistiques par prestataire */}
                  {sectionItems.some(c => c.prestataire) && (
<<<<<<< HEAD
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md">
=======
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-md">
>>>>>>> from-master
                      <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-4">
                        Répartition par prestataire
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(
                          sectionItems.reduce((acc, client) => {
                            if (client.prestataire) {
                              acc[client.prestataire] = (acc[client.prestataire] || 0) + 1;
                            }
                            return acc;
                          }, {} as Record<string, number>)
                        )
                          .sort((a, b) => b[1] - a[1])
                          .slice(0, 5)
                          .map(([prestataire, count]) => {
                            const percentage = sectionItems.length > 0 ? (count / sectionItems.length) * 100 : 0;
                            const colors = [
                              'from-indigo-500 to-purple-500',
                              'from-emerald-500 to-green-500',
                              'from-amber-500 to-orange-500',
                              'from-cyan-500 to-blue-500',
                              'from-pink-500 to-rose-500',
                            ];
                            const colorIndex = Object.keys(statusCounts).indexOf(prestataire) % colors.length;
                            
                            return (
                              <div key={prestataire}>
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{prestataire}</span>
                                  <span className="text-sm font-bold text-gray-900 dark:text-white">{count} ({percentage.toFixed(1)}%)</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                  <div
                                    className={`h-2 rounded-full bg-gradient-to-r ${colors[colorIndex]} shadow-md transition-all duration-500`}
                                    style={{ width: `${percentage}%` }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal du formulaire */}
      {showForm && (
        <ClientForm
          section={section}
          client={editingClient}
          onSave={onSave}
          onClose={() => {
            setShowForm(false);
            setEditingClient(null);
          }}
        />
      )}
<<<<<<< HEAD

      {/* Dialogue de confirmation de suppression */}
      {deleteConfirm && (
        <ConfirmDialog
          isOpen={!!deleteConfirm}
          onClose={() => setDeleteConfirm(null)}
          onConfirm={confirmDelete}
          title="Confirmer la suppression"
          message={`Êtes-vous sûr de vouloir supprimer le dossier "${deleteConfirm.name}" ? Cette action est irréversible.`}
          confirmText="Supprimer"
          cancelText="Annuler"
          variant="danger"
        />
      )}
=======
>>>>>>> from-master
    </div>
  );
}
