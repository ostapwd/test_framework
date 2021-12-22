import apiUtility from "../utilities/apiUtility";

class ApiController {

    getComments() {
        return cy
            .request({
                method: "GET",
                url: Cypress.env("API_HOST") + "/comments",
                failOnStatusCode: false
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    getComment(commentId: number) {
        return cy
            .request({
                method: "GET",
                url: Cypress.env("API_HOST") + "/comments/" + commentId,
                failOnStatusCode: false
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    addComment(comment: object) {
        return cy
            .request({
                method: "POST",
                url: Cypress.env("API_HOST") + "/comments",
                failOnStatusCode: false,
                body: comment
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    editComment(commentId: number, comment: object) {
        return cy
            .request({
                method: "PUT",
                url: Cypress.env("API_HOST") + "/comments/" + commentId,
                failOnStatusCode: false,
                body: comment
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    deleteComment(commentId: number) {
        return cy
            .request({
                method: "DELETE",
                url: Cypress.env("API_HOST") + "/comments/" + commentId,
                failOnStatusCode: false
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }
}
export default new ApiController();
