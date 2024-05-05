import { React } from 'react'

export const ParametersList = ({parametersArr})=> {
    return(
        <div>
            {parametersArr.map(elem => (
                <h3 key={elem.parameter}>
                    {`${elem.parameter}: ${elem.value}`}
                </h3>
            ))}
        </div>
    )
}