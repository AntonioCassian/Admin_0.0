import React from "react";

export class ErrorMsg extends Error {
    public readonly message: string = '';
    constructor(message: string) {
        super();

        this.message = message;
    }
}