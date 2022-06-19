import HomePage from "../support/pages/home";

describe("industria", () => {
  //let industria

  before(() => {
    cy.fixture("industria.json").then((i) => {
      //industria= i.industria_4;

      cy.setLocalStorage("industria", i.industria_4);

      cy.setLocalStorage("futuro", i.futuro);

      // console.log(i.industria_4)
    });

    cy.saveLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  it("teste", () => {
    //console.log("apenas testando");
    cy.getLocalStorage("industria").then((ind) => {
      console.log(ind);
    });
  });

  it("teste 2", () => {
    //console.log("apenas testando");
    cy.getLocalStorage("futuro").then((fut) => {
      console.log(fut);
    });
  });
});

it.only("teste 3", () => {
  cy.visitHome();
  cy.clickMenu().click({ force: true });
  cy.futuro(message);
});
