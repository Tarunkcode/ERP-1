import * as React from "react";

export interface DomainContext {
    domain_name: string;
    port_no: string;
    fyear: string;
}
const contextdomain = React.createContext<DomainContext | null>(null);
export const DomainContextProvider = contextdomain.Provider;
export const DomainContextConsumer = contextdomain.Consumer;