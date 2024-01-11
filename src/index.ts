import {graph, Fetcher, SPARQLToQuery} from "rdflib";

const store = graph();
const fetcher = new Fetcher(store, {timeout: 5000});
fetcher.load('https://3po.ch/1.nt').then(() => {
    const queryString = 'SELECT ?s ?p ?o WHERE {?s ?p ?o.}.';
    const query = SPARQLToQuery(queryString, true, store);
    if (!query)
        return;
    const res = store.querySync(query);
    console.log(res);
});
