describe("Conjunto de Testes", function() {
    it("Soma de inteiros positivos", function() {
        expect(soma(1, 2)).toBe(3);
        expect(soma(2, 3)).toBe(5);
        expect(soma(100, 200)).toBe(300);
    });
    it("Soma de inteiros e negativos", function() {
        expect(soma(-1 , 2)).toBe(1);
        expect(soma(-10, 5)).toBe(-5);
        expect(soma(1000, -200)).toBe(800);
    });
    it("Soma de numeros float", function() {
        expect(soma(1.123, 2.123).toFixed(3)).toBe("3.246");
        expect(soma(-1.123, -2.123).toFixed(3)).toBe("-3.246");
        expect(soma(10.888, -7.111).toFixed(3)).toBe("3.777");
    });
});