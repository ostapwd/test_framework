class ApiUtility {
  logResponse(response) {
    cy.log(JSON.stringify(response, null, 2));
    cy.task("log", response);
  }

  log(object) {
    cy.log(JSON.stringify(object, null, 2));
    cy.task("log", object);
  }

  logMessage(message) {
    cy.log(message);
    cy.task("log", message);
  }
}

export default new ApiUtility();
