import React from 'react';
import Aux from '../../hoc/Aux';
import InputAdditionsTable from '../../components/InputAdditionsTable/InputAdditionsTable';
import InputAdditionsAdd from '../../components/InputAdditionsAdd/InputAdditionsAdd';

const InputAdditions = (props) => {

    return (
        <Aux>
            <InputAdditionsTable 
                additions={props.additions} 
                additionDelete={props.additionDelete}
                />
            <InputAdditionsAdd 
                additionAdd={props.additionAdd}
            />
        </Aux>
    );

}

export default InputAdditions;