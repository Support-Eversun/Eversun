import { formatDateFR, getStatutBadgeColor } from '@/lib/clientTableUtils';

describe('clientTableUtils', () => {
  describe('formatDateFR', () => {
    it('formats a valid date string correctly', () => {
      const result = formatDateFR('2024-01-15');
      expect(result).toBe('15/01/2024');
    });

    it('returns empty string for undefined input', () => {
      const result = formatDateFR(undefined);
      expect(result).toBe('');
    });

    it('returns empty string for null input', () => {
      const result = formatDateFR(null as any);
      expect(result).toBe('');
    });

    it('returns original string for invalid date', () => {
      const result = formatDateFR('invalid-date');
      expect(result).toBe('invalid-date');
    });
  });

  describe('getStatutBadgeColor', () => {
    it('returns accord color for accord status', () => {
      const result = getStatutBadgeColor('accordé');
      expect(result).toContain('emerald');
    });

    it('returns refus color for refus status', () => {
      const result = getStatutBadgeColor('refusé');
      expect(result).toContain('red');
    });

    it('returns abf color for abf status', () => {
      const result = getStatutBadgeColor('abf');
      expect(result).toContain('orange');
    });

    it('returns in progress color for en cours status', () => {
      const result = getStatutBadgeColor('en cours');
      expect(result).toContain('blue');
    });

    it('returns default color for unknown status', () => {
      const result = getStatutBadgeColor('unknown');
      expect(result).toContain('gray');
    });

    it('returns default color for undefined status', () => {
      const result = getStatutBadgeColor(undefined);
      expect(result).toContain('gray');
    });
  });
});
