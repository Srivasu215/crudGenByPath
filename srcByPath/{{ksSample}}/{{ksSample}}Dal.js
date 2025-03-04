import { StartFunc as StartFuncreadFile } from './kLowDb/{{ksSample}}readFile.js';
import { StartFunc as StartFuncReadFileFromModal } from './kLowDb/{{ksSample}}readFileFromModal.js';
import { StartFunc as StartFuncwriteFile } from './kLowDb/{{ksSample}}writeFile.js';
import { StartFunc as StartFuncWriteFileFromModal } from './kLowDb/{{ksSample}}writeFileFromModal.js';
import { StartFunc as StartFuncImportToFile } from './kLowDb/{{ksSample}}ImportToFile.js';

let GetFunc = () => {
    return StartFuncreadFile();
};

let GetDataOnlyFunc = () => {
    let LocalFromLowDb= StartFuncreadFile();

    if (LocalFromLowDb===false) {
    return false;    
    };

    return LocalFromLowDb.JsonData;
};

let GetFromModalFunc = () => {
    return StartFuncReadFileFromModal();
};

let GetFromModalUuidFunc = () => {
    return StartFuncReadFileFromModal();
};

let GetFromModalUuidAndTSFunc = () => {
    return StartFuncReadFileFromModal();
};

let PostFunc = ({ LocalKey1: LocalKeys }) => {
    return StartFuncwriteFile({ LocalKey1: LocalKeys });
};

let PostFromModalFunc = ({ LocalBodyAsModal }) => {
    return StartFuncWriteFileFromModal({ LocalBodyAsModal });
};

let PostUploadFunc = ({ LocalBodyAsModal }) => {
    return StartFuncImportToFile({ LocalBodyAsModal });
};

let PostGetSelectColumnsFunc = ({ LocalBodyAsModal }) => {
    return StartFuncReadFileFromModal();
};

export {
    GetFunc, GetDataOnlyFunc, PostFunc, PostFromModalFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    PostUploadFunc, PostGetSelectColumnsFunc
};