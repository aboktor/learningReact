import * as React from "react";
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div>
            <h1> Hello {this.props.compiler} {this.props.framework}</h1> 
            <Fabric>
            <DefaultButton>
                Office Fabric UI Button
            </DefaultButton>
            </Fabric>
            </div>
            ;
    }
}
