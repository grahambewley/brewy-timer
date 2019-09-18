import React from 'react';
import Auxi from '../../hoc/Auxi';
import InputAdditionsTable from '../../components/InputAdditionsTable/InputAdditionsTable';
import InputAdditionsAdd from '../../components/InputAdditionsAdd/InputAdditionsAdd';

const InputAdditions = (props) => {

    return (
        <Auxi>
            <InputAdditionsAdd 
                additionAdd={props.additionAdd}
            />
            <InputAdditionsTable 
                additions={props.additions} 
                additionDelete={props.additionDelete}
                />

        </Auxi>
    );

}

export default InputAdditions;