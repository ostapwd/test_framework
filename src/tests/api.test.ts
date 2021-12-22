import {describe, expect, test} from "@jest/globals"
import {sum} from "../math";

import apiControllerJest from "../api/apiControllerJest";
import getCommentsSchema from "../jsonSchemas/getCommentsSchema.json";
import addCommentSchema from "../jsonSchemas/addCommentSchema.json"
import editCommentSchema from "../../cypress/jsonSchemas/editCommentSchema.json";
import {validate} from "jsonschema";


describe("Comments API tests", () => {

    it("GET comments test", async () => {
        let response = await apiControllerJest.getComments();

        expect(response.statusCode).toEqual(200);

        let result = validate(response.body, getCommentsSchema);
        console.log(result.errors.toString());
        expect(result.valid).toBeTruthy();
    });

    describe("POST comment API tests", () => {

        let newComment = {
            "postId": 1,
            "name": "Test comment name",
            "email": "testemail@gmail.com",
            "body": "Test comment body"
        }

        it("POST a new comment", async () => {
            let response = await apiControllerJest.addComment(newComment);

            expect(response.statusCode).toEqual(201);

            let result = validate(response.body, addCommentSchema);
            console.log(result.errors.toString());
            expect(result.valid).toBeTruthy();

            newComment["id"] = response.body.id;
            expect(response.body).toMatchObject(newComment);
        });

        it("Verify a new comment exists in the application", async () => {
            let response = await apiControllerJest.getComments();

            expect(response.statusCode).toEqual(200);

            //expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining(newComment)]));
        });
    });

    it("PUT comment test", async () => {

        let updatedComment = {
            "postId": 1,
            "name": "Test updated comment name",
            "email": "testemail@gmail.com",
            "body": "Test updated comment body"
        }

        let response = await apiControllerJest.editComment(1, updatedComment);

        expect(response.statusCode).toEqual(200);

        let result = validate(response.body, editCommentSchema);
        console.log(result.errors.toString());
        expect(result.valid).toBeTruthy();

        updatedComment["id"] = response.body.id;
        expect(response.body).toMatchObject(updatedComment);
    });

    it("DELETE comment test", async () => {
        let response = await apiControllerJest.deleteComment(1);

        expect(response.statusCode).toEqual(200);
    });

});

describe("Unit tests", () => {

    test.concurrent.each([
        [1, 1, 2],
        [1, 2, 3],
        [2, 1, 3],
        [2, 2, 4],
        [2, 3, 5],
    ])(".add(%i, %i)", async (a, b, expected) => {
        expect(sum(a, b)).toBe(expected);
    });

});