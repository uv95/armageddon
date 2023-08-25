import { describe, test, expect } from 'vitest';
import { formatDate } from './formatDate';

describe('formatDate', () => {
    test('should format date properly', () => {
        const input = '2023-08-24T11:50:11.650Z';
        const result = '24 авг 2023';

        expect(formatDate(input)).toBe(result)
    });

    test('should add exact time', () => {
        const input = '2023-08-24T11:50:11.650Z';
        const result = '24 авг 2023, 14:50';

        expect(formatDate(input, true)).toBe(result)
    });

    test('should return Invalid Date error', () => {
        const input = 'asdasfgw';
        expect(formatDate(input)).toBe('Invalid Date')
    });
});