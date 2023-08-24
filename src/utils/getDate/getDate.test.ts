import { describe, test, expect } from 'vitest';
import { getDate } from './getDate';

describe('getDate', () => {
    test('should get today', () => {
        const day = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();

        const result = `${year}-${+month > 9 ? month : `0${month}`}-${+day > 9 ? day : `0${day}`}`;

        expect(getDate(0)).toBe(result)
    });
    test('should get tomorrow', () => {
        const day = new Date().getDate() ;
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();

        const result = `${year}-${+month > 9 ? month : `0${month}`}-${+day > 9 ? day : `0${day}`}`;

        expect(getDate(1)).toBe(result)
    });
});