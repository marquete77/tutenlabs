import {Services_definitionServices} from "../api/services_definition.services";


export const startCreateServiceDefinition = async (dataform) => {
        await Services_definitionServices.createServiceDefinition(dataform).then(resp => {
            console.log(resp);
            return resp;
        })
}

