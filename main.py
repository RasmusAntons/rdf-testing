import rdflib


g = rdflib.Graph()
g.parse('https://3po.ch/1.nt')
g.parse('https://3po.ch/2.nt')
print(g.serialize(format='nt'))
