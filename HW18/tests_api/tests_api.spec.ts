import superagent, { Response } from 'superagent';
import { URL } from '../const';

describe('REST API Tests', () => {
    let createdObjectId: string;

    // 1. GET /objects - List of all objects
    describe('GET: List of all objects', () => {
        test('Return list of all objects', async () => {
            const response: Response = await superagent.get(`${URL}/objects`);

            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBeGreaterThan(0);
            expect(response.body[0]).toHaveProperty('id');
        });
    });

    // 2. GET: List of objects by ids
    describe('GET: List of objects by ids', () => {
        test('Return list of objects by ids', async () => {
            const response: Response = await superagent.get(`${URL}/objects`).query({ id: [3, 5, 10] });

            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        });

        test('Return specific objects by ids', async () => {
            const response: Response = await superagent.get(`${URL}/objects`).query({ id: [1, 2] });

            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);

            if (response.body.length > 0) {
                response.body.forEach((obj: any) => {
                    expect(['1', '2']).toContain(obj.id);
                });
            }
        });
    });

    // 3. GET: Single object
    describe('GET: Single object', () => {
        test('Return single object by id', async () => {
            const response: Response = await superagent.get(`${URL}/objects/7`);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('id', '7');
            expect(response.body).toHaveProperty('name');
        });
    });

    // 4. POST: Add object
    describe('POST: Add object', () => {
        test('Create new object with full data', async () => {
            const newObject = {
                name: 'Apple MacBook Pro 16',
                data: {
                    year: 2019,
                    price: 1849.99,
                    'CPU model': 'Intel Core i9',
                    'Hard disk size': '1 TB'
                }
            };

            const response: Response = await superagent.post(`${URL}/objects`).send(newObject);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('id');
            expect(response.body.name).toBe(newObject.name);
            expect(response.body.data).toMatchObject(newObject.data);

            // Сохраняем ID для использования в PUT, PATCH, DELETE
            createdObjectId = response.body.id;
        });

        test('Create object with minimal data', async () => {
            const newObject = {
                name: 'Apple AirPods',
                data: {
                    generation: '3rd',
                    price: 199.99
                }
            };

            const response: Response = await superagent.post(`${URL}/objects`).send(newObject);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('id');
            expect(response.body.name).toBe(newObject.name);
        });
    });

    // 5. PUT: Update object
    describe('PUT: Update object', () => {
        test('Fully update created object', async () => {
            const updatedObject = {
                name: 'Apple MacBook Pro 16 (Updated)',
                data: {
                    year: 2020,
                    price: 2049.99,
                    'CPU model': 'Intel Core i9',
                    'Hard disk size': '2 TB',
                    color: 'silver'
                }
            };

            const response: Response = await superagent.put(`${URL}/objects/${createdObjectId}`).send(updatedObject);

            expect(response.status).toBe(200);
            expect(response.body.id).toBe(createdObjectId);
            expect(response.body.name).toBe(updatedObject.name);
            expect(response.body.data).toMatchObject(updatedObject.data);
        });
    });

    // 6. PATCH: Partially update object
    describe('PATCH: Partially update object', () => {
        test('Partially update object name', async () => {
            const patchData = {
                name: 'Apple MacBook Pro 16 (Patched Name)'
            };

            const response: Response = await superagent.patch(`${URL}/objects/${createdObjectId}`).send(patchData);

            expect(response.status).toBe(200);
            expect(response.body.id).toBe(createdObjectId);
            expect(response.body.name).toBe(patchData.name);
        });

        test('Partially update data', async () => {
            const patchData = {
                data: {
                    color: 'Space Gray',
                    price: 2500
                }
            };

            const response: Response = await superagent.patch(`${URL}/objects/${createdObjectId}`).send(patchData);

            expect(response.status).toBe(200);
            expect(response.body.data.color).toBe('Space Gray');
            expect(response.body.data.price).toBe(2500);
        });
    });

    // 7. DELETE: Delete object
    describe('DELETE: Delete object', () => {
        test('Should delete created object', async () => {
            const response: Response = await superagent.delete(`${URL}/objects/${createdObjectId}`);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('message');
        });

        test('Should return 404 after deleting object', async () => {
            try {
                await superagent.get(`${URL}/objects/${createdObjectId}`);
                fail('Should have thrown an error');
            } catch (error: any) {
                expect(error.status).toBe(404);
                expect(error.response.body.error).toContain(`Oject with id=${createdObjectId} was not found`);
            }
        });
    });
});
