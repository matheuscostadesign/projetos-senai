describe("Classificacao indicativa", function() {
    beforeEach(function() {
        classificacao = new ClassificacaoIndicativa();
    });

    describe("Classificacao live", function() {
        it("tem que permitir todos", function() {
            expect(
                classificacao.valida_classificacao_indicativa(true, "05/04/1985", 100)
            ).toBeTruthy();
        });
    });

    describe("Classificacao de 10 anos", function() {

        it("usuario tem a idade minima para 10 anos", function() {
            expect(
                classificacao.valida_classificacao_indicativa(true, "05/04/2008", 10)
            ).toBeTruthy();
        });

        it("usuario não tem a idade minima para 10 anos", function() {
            expect(
                classificacao.valida_classificacao_indicativa(false, "05/04/2018", 10)
            ).toBeFalsy();
        });
    });


    describe("Classificacao de 12 anos", function() {

        it("usuario tem a idade minima para 12 anos", function() {
            expect(
                classificacao.valida_classificacao_indicativa(true, "05/04/2006", 12)
            ).toBeTruthy();
        });

        it("usuario não tem a idade minima para 12 anos", function() {
            expect(
                classificacao.valida_classificacao_indicativa(false, "05/04/2013", 12)
            ).toBeFalsy();
        });
    });

    describe("Classificacao de 14 anos", function() {

        it("usuario tem a idade minima para 14 anos", function() {
            expect(
                classificacao.valida_classificacao_indicativa(true, "05/04/2004", 14)
            ).toBeTruthy();
        });

        it("usuario não tem a idade minima para 14 anos", function() {
            expect(
                classificacao.valida_classificacao_indicativa(false, "05/04/2013", 14)
            ).toBeFalsy();
        });
    });

    describe("Classificacao de 16 anos", function() {

        it("usuario tem a idade minima para 16 anos", function() {
            expect(
                classificacao.valida_classificacao_indicativa(true, "05/04/2002", 16)
            ).toBeTruthy();
        });

        it("usuario não tem a idade minima para 16 anos", function() {
            expect(
                classificacao.valida_classificacao_indicativa(false, "05/04/2013", 16)
            ).toBeFalsy();
        });
    });

    describe("Classificacao de 18 anos", function() {

        it("usuario tem a idade minima para 18 anos", function() {
            expect(
                classificacao.valida_classificacao_indicativa(true, "05/04/2000", 18)
            ).toBeTruthy();
        });

        it("usuario não tem a idade minima para 18 anos", function() {
            expect(
                classificacao.valida_classificacao_indicativa(false, "05/04/2013", 18)
            ).toBeFalsy();
        });
    });
});