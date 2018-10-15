// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// greeting.js defines the greeting dialog

// Import required Bot Builder
const { ComponentDialog, WaterfallDialog, TextPrompt } = require('botbuilder-dialogs');

const BOOKCAB_DIALOG = 'bookCabDialog';
const BOOKCAB_PROMPT = 'bookCabPrompt';

class BookCab extends ComponentDialog {
    constructor(dialogId, userProfileAccessor) {
        super(dialogId);

        if(!dialogId) throw ('Missing parameter.  dialogId is required');
        if(!userProfileAccessor) throw ('Missing parameter.  userProfileAccessor is required');

        this.addDialog(new WaterfallDialog(BOOKCAB_DIALOG, [
            this.bookCabPrompt.bind(this)
        ]));

        this.addDialog(new TextPrompt(BOOKCAB_PROMPT, this.validateDest));
    }

    async bookCabPrompt(step){
        return await step.prompt(BOOKCAB_PROMPT, "Got it, please tell me your destination.");
    }

    async validateDest(ctx){
        return true;
    }

}

exports.BookCabDialog = BookCab;