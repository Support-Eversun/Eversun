'use client';

import { useState } from 'react';
import { User, X, Eye, EyeSlash, Calendar, Buildings, FileText, Key, WarningCircle, Lightning, CheckCircle, ChatCircle, Flag, House, Clock, Copy, Link, Trash, PencilSimple } from '@phosphor-icons/react';
import Badge from '@/components/ui/Badge';
import ConfirmDialog from '@/components/ui/ConfirmDialog';
import { ClientRecord } from '@/types/client';
import {
  formatDateFR,
  getStatutBadgeColor,
} from '@/lib/clientTableUtils';
import { toast } from '@/store/useToastStore';

interface ClientModalProps {
  selectedClient: ClientRecord | null;
  onClose: () => void;
  onEdit: (client: ClientRecord) => void;
  onDelete?: (id: string) => void;
  section: string;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}

export default function ClientModal({
  selectedClient,
  onClose,
  onEdit,
  onDelete,
  section,
  showPassword,
  setShowPassword,
}: ClientModalProps) {
  if (!selectedClient) return null;

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const getUrgencyInfo = () => {
    if (!selectedClient.dateEstimative) return null;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const estimatedDate = new Date(selectedClient.dateEstimative);
    estimatedDate.setHours(0, 0, 0, 0);
    const diffDays = Math.ceil((estimatedDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return { color: 'from-red-500 to-rose-600', label: 'En retard', urgent: true, diffDays };
    }
    if (diffDays === 0) {
      return { color: 'from-red-500 to-orange-500', label: "Aujourd'hui", urgent: true, diffDays };
    }
    if (diffDays <= 3) {
      return { color: 'from-orange-500 to-amber-500', label: 'Urgent', urgent: true, diffDays };
    }
    if (diffDays <= 7) {
      return { color: 'from-yellow-500 to-amber-500', label: 'Proche', urgent: false, diffDays };
    }
    return null;
  };

  const urgency = getUrgencyInfo();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} a été copié dans le presse-papier`);
  };

  const handleDelete = () => {
    setShowDeleteDialog(true);
  };

  const confirmDelete = async () => {
    if (onDelete) {
      onDelete(String(selectedClient._id || selectedClient.id || ''));
      onClose();
    }
    setShowDeleteDialog(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-lg shadow-md w-full max-w-4xl max-h-[90vh] overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center gap-4 flex-1">
            <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow">
              <User className="h-6 w-6" weight="bold" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedClient.client}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <Badge className={getStatutBadgeColor(selectedClient.statut)}>
                  {selectedClient.statut || 'Sans statut'}
                </Badge>
                {urgency && (
                  <Badge className={`bg-gradient-to-r ${urgency.color} text-white border-0 animate-pulse`}>
                    {urgency.label} ({urgency.diffDays}j)
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onEdit(selectedClient)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              title="Modifier"
            >
              <PencilSimple className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" weight="bold" />
            </button>
            {onDelete && (
              <button
                onClick={handleDelete}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                title="Supprimer"
              >
                <Trash className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400" weight="bold" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-[1.01] group"
              title="Fermer"
            >
              <X className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200" weight="bold" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 min-h-0">
          <div className="space-y-6">
            {/* Informations générales */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <User className="h-5 w-5 text-teal-500" weight="bold" />
                Informations générales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedClient.prestataire && (
                  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <Buildings className="h-4 w-4 text-teal-500" weight="bold" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Prestataire</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {selectedClient.prestataire}
                      </p>
                    </div>
                  </div>
                )}
                {selectedClient.dateEnvoi && (
                  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <Calendar className="h-4 w-4 text-teal-500" weight="bold" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Date d'envoi</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {formatDateFR(selectedClient.dateEnvoi)}
                      </p>
                    </div>
                  </div>
                )}
                {selectedClient.dateEstimative && (
                  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <Clock className="h-4 w-4 text-teal-500" weight="bold" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Date estimative</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {formatDateFR(selectedClient.dateEstimative)}
                      </p>
                    </div>
                  </div>
                )}
                {selectedClient.financement && (
                  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <Lightning className="h-4 w-4 text-teal-500" weight="bold" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Financement</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {selectedClient.financement}
                      </p>
                    </div>
                  </div>
                )}
                {selectedClient.noDp && (
                  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <FileText className="h-4 w-4 text-teal-500" weight="bold" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Numéro DP</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {selectedClient.noDp}
                      </p>
                    </div>
                  </div>
                )}
                {selectedClient.ville && (
                  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <Buildings className="h-4 w-4 text-teal-500" weight="bold" />
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

            {/* Identifiants Portail - Affiché uniquement pour DP en cours */}
            {section.startsWith('dp') && section !== 'dp-accordes' && section !== 'dp-refuses' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Key className="h-5 w-5 text-teal-500" weight="bold" />
                  Identifiants Portail
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedClient.portail && (
                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <Buildings className="h-4 w-4 text-teal-500" weight="bold" />
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Portail</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {selectedClient.portail}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedClient.identifiant && (
                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <User className="h-4 w-4 text-teal-500" weight="bold" />
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Identifiant</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {selectedClient.identifiant}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedClient.motDePasse && (
                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <Key className="h-4 w-4 text-teal-500" weight="bold" />
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Mot de passe</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {showPassword ? selectedClient.motDePasse : '••••••••'}
                        </p>
                      </div>
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeSlash className="h-4 w-4 text-gray-500" weight="bold" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-500" weight="bold" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Informations Consuel - Affiché uniquement pour Consuel */}
            {section.startsWith('consuel') && (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Lightning className="h-5 w-5 text-teal-500" weight="bold" />
                  Informations Consuel
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedClient.pvChantier && (
                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <Calendar className="h-4 w-4 text-teal-500" weight="bold" />
                      <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">PV Chantier</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {formatDateFR(selectedClient.pvChantier)}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedClient.causeNonPresence && (
                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <WarningCircle className="h-4 w-4 text-red-500" weight="bold" />
                      <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Cause non présence</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {selectedClient.causeNonPresence}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedClient.etatActuel && (
                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <CheckCircle className="h-4 w-4 text-emerald-500" weight="bold" />
                      <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">État actuel</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {selectedClient.etatActuel}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedClient.typeConsuel && (
                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <Lightning className="h-4 w-4 text-amber-500" weight="bold" />
                      <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Type Consuel</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {selectedClient.typeConsuel}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedClient.dateDerniereDemarche && (
                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <Calendar className="h-4 w-4 text-teal-500" weight="bold" />
                      <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Dernière démarche</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {formatDateFR(selectedClient.dateDerniereDemarche)}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedClient.dateEstimative && (
                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <Clock className="h-4 w-4 text-teal-500" weight="bold" />
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
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <ChatCircle className="h-5 w-5 text-teal-500" weight="bold" />
                  Commentaires
                </h3>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                  <p className="font-medium text-gray-900 dark:text-white whitespace-pre-wrap">
                    {selectedClient.commentaires}
                  </p>
                </div>
              </div>
            )}

            {/* Informations Raccordement - Affiché uniquement pour Raccordement */}
            {section === 'raccordement' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Flag className="h-5 w-5 text-teal-500" weight="bold" />
                  Raccordement
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedClient.typeConsuel && (
                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <Lightning className="h-4 w-4 text-amber-500" weight="bold" />
                      <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Type de consuel</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {selectedClient.typeConsuel}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedClient.raccordement && (
                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
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
                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <Calendar className="h-4 w-4 text-teal-500" weight="bold" />
                      <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Date dernière démarche</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {formatDateFR(selectedClient.dateDerniereDemarche)}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedClient.dateEstimative && (
                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <Clock className="h-4 w-4 text-teal-500" weight="bold" />
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
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <House className="h-5 w-5 text-teal-500" weight="bold" />
                  Mise en service
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedClient.numeroContrat && (
                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <FileText className="h-4 w-4 text-teal-500" weight="bold" />
                      <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Numéro de contrat</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {selectedClient.numeroContrat}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedClient.dateMiseEnService && (
                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <Calendar className="h-4 w-4 text-teal-500" weight="bold" />
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
        <div className="flex justify-between items-center p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            ID: {selectedClient._id || selectedClient.id}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 font-medium"
          >
            Fermer
          </button>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={confirmDelete}
        title="Supprimer le client"
        message={`Êtes-vous sûr de vouloir supprimer le dossier de ${selectedClient.client} ? Cette action est irréversible.`}
        confirmText="Supprimer"
        cancelText="Annuler"
        variant="danger"
      />
    </div>
  );
}
