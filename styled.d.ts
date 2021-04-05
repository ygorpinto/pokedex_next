import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title : string;
    
        colors : {
            
            glass:string;
            background:string;
            text:string;
    
        }
    }
}