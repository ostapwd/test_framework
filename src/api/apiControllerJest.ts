import request from "request-promise";

class ApiController {

    async getComments() {
        let options = {
            method: "GET",
            uri: "https://jsonplaceholder.typicode.com/comments",
            strictSSL: false,
            resolveWithFullResponse: true,
            simple: false,
            json: true
        };

        let response = await request(options);
        console.log(response.statusCode);
        console.log(response.body);

        return response;
    }

    async addComment(comment: object) {
        let options = {
            method: "POST",
            uri: "https://jsonplaceholder.typicode.com/comments",
            body: comment,
            headers: {
                "content-type": "application/json"
            },
            strictSSL: false,
            resolveWithFullResponse: true,
            simple: false,
            json: true
        };

        let response = await request(options);
        console.log(response.statusCode);
        console.log(response.body);

        return response;
    }

    async editComment(commentId: number, comment: object) {
        let options = {
            method: "PUT",
            uri: "https://jsonplaceholder.typicode.com/comments/" + commentId,
            body: comment,
            headers: {
                "content-type": "application/json"
            },
            strictSSL: false,
            resolveWithFullResponse: true,
            simple: false,
            json: true
        };

        let response = await request(options);
        console.log(response.statusCode);
        console.log(response.body);

        return response;
    }

    async deleteComment(commentId: number) {
        let options = {
            method: "DELETE",
            uri: "https://jsonplaceholder.typicode.com/comments/" + commentId,
            strictSSL: false,
            resolveWithFullResponse: true,
            simple: false
        };

        let response = await request(options);
        console.log(response.statusCode);
        console.log(response.body);

        return response;
    }

}
export default new ApiController();