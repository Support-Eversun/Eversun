import { GET, POST } from '@/app/api/clients/route';
import { NextRequest } from 'next/server';

// Mock MongoDB connection
jest.mock('@/lib/mongo', () => ({
  connectToDatabase: jest.fn(),
}));

// Mock mongoose
jest.mock('mongoose', () => {
  const actualMongoose = jest.requireActual('mongoose');
  return {
    ...actualMongoose,
    models: {},
    model: jest.fn(() => ({
      countDocuments: jest.fn().mockResolvedValue(10),
      find: jest.fn(() => ({
        skip: jest.fn(() => ({
          limit: jest.fn(() => ({
            lean: jest.fn().mockResolvedValue([]),
          })),
        })),
      })),
      create: jest.fn().mockResolvedValue({ _id: '1' }),
    })),
  };
});

describe('API /api/clients', () => {
  describe('GET', () => {
    it('should return clients with pagination', async () => {
      const request = new NextRequest('http://localhost:3000/api/clients?page=1&limit=10&section=clients');
      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data).toHaveProperty('data');
      expect(data).toHaveProperty('pagination');
      expect(data.pagination).toMatchObject({
        page: 1,
        limit: 10,
        total: 10,
        totalPages: 1,
      });
    });

    it('should use default limit when not specified', async () => {
      const request = new NextRequest('http://localhost:3000/api/clients?page=1');
      const response = await GET(request);
      const data = await response.json();

      expect(data.pagination.limit).toBe(50);
    });

    it('should filter by section when specified', async () => {
      const request = new NextRequest('http://localhost:3000/api/clients?section=dp-en-cours');
      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
    });
  });

  describe('POST', () => {
    it('should create a new client', async () => {
      const mockClient = {
        client: 'Test Client',
        section: 'clients',
        statut: 'en cours',
      };

      const request = new NextRequest('http://localhost:3000/api/clients', {
        method: 'POST',
        body: JSON.stringify(mockClient),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data).toHaveProperty('_id');
    });

    it('should return 400 for invalid section', async () => {
      const mockClient = {
        client: 'Test Client',
        section: 'invalid-section',
        statut: 'en cours',
      };

      const request = new NextRequest('http://localhost:3000/api/clients', {
        method: 'POST',
        body: JSON.stringify(mockClient),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data).toHaveProperty('error');
    });

    it('should return 400 for missing section', async () => {
      const mockClient = {
        client: 'Test Client',
        statut: 'en cours',
      };

      const request = new NextRequest('http://localhost:3000/api/clients', {
        method: 'POST',
        body: JSON.stringify(mockClient),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data).toHaveProperty('error');
    });
  });
});
