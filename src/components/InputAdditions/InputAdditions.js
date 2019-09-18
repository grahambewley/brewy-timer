import React from 'react';
import Aux from '../../hoc/Aux';
import InputAdditionsTable from '../../components/InputAdditionsTable/InputAdditionsTable';
import InputAdditionsAdd from '../../components/InputAdditionsAdd/InputAdditionsAdd';

const InputAdditions = (props) => {

    return (
        <Aux>
            <InputAdditionsAdd 
                additionAdd={props.additionAdd}
            />
            <InputAdditionsTable 
                additions={props.additions} 
                additionDelete={props.additionDelete}
                />

        </Aux>
    );

}

export default InputAdditions;