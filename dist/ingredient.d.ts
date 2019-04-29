export interface Ingredient {
    quantity_numerator?: number;
    quantity_denominator?: number;
    unit?: string;
    name: string;
    preparation?: string;
    optional: boolean;
}
export declare const parseIngredient: (s?: string) => Ingredient;
//# sourceMappingURL=ingredient.d.ts.map