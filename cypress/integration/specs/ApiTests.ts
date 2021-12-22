import apiController from "../../api/apiController";
import getCommentsSchema from "../../jsonSchemas/getCommentsSchema.json";
import addCommentSchema from "../../jsonSchemas/addCommentSchema.json";
import editCommentSchema from "../../jsonSchemas/editCommentSchema.json";

import {validate} from "jsonschema";

describe("Comments API tests", () => {
    it("GET comments test", () => {
        apiController.getComments().then( response => {
            expect(response.status).to.be.equal(200);

            let result = validate(response.body, getCommentsSchema);
            expect(result.valid, result.errors.toString()).to.be.true;
        });
    });

    describe("POST comment API tests", () => {

        let newComment = {
            "postId": 1,
            "name": "Test comment name",
            "email": "testemail@gmail.com",
            "body": "Test comment body"
        }

        it("POST a new comment", () => {
            let newComment = {
                "postId": 1,
                "name": "Test comment name",
                "email": "testemail@gmail.com",
                "body": "Test comment body"
            }
            apiController.addComment(newComment).then( response => {
                expect(response.status).to.be.equal(201);

                let result = validate(response.body, addCommentSchema);
                expect(result.valid, result.errors.toString()).to.be.true;

                newComment["id"] = response.body.id;
                expect(response.body).to.deep.equal(newComment);
            });
        });

        it("Verify a new comment exists in the application", () => {
            apiController.getComments().then( response => {
                expect(response.status).to.be.equal(200);
                //expect(response.body).to.deep.include(newComment);
            });
        });
    });

    it("PUT comment test", () => {
        let updatedComment = {
            "postId": 1,
            "name": "Test updated comment name",
            "email": "testemail@gmail.com",
            "body": "Test updated comment body"
        }
        apiController.editComment(1, updatedComment).then( response => {
            expect(response.status).to.be.equal(200);

            let result = validate(response.body, editCommentSchema);
            expect(result.valid, result.errors.toString()).to.be.true;

            updatedComment["id"] = response.body.id;
            expect(response.body).to.deep.equal(updatedComment);
        });
    });

    it("DELETE comment test", () => {
        apiController.deleteComment(1).then( response => {
            expect(response.status).to.be.equal(200);
        });
    });
})