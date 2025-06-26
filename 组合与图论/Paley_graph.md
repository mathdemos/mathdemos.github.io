---
layout: post
title:  "Paley graph"
date: 2025-05-20
tags: GraphTheory
---

<p><a href="https://en.wikipedia.org/wiki/Paley_graph" target="_blank">Paley graphs</a> are dense undirected graphs constructed from the members of a suitable finite field by connecting pairs of elements that differ by a quadratic residue. </p>
<div class="sage">
<script type="text/x-sage">
def PaleyGraph(q):
    K.<a> = GF(q)
    return Graph([K, lambda i,j: i != j and (i-j).is_square()])
g=PaleyGraph(13)
show(g.plot(layout='circular'))
</script>
</div>
<div class="code">
<textarea>
g = PaleyGraph(13)
g.vertices()
#[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
g.is_vertex_transitive()
#True
g.degree_sequence()
#[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]

g.spectrum()
"""[6, 1.302775637731995?, 1.302775637731995?, 1.302775637731995?,
1.302775637731995?, 1.302775637731995?, 1.302775637731995?,
-2.302775637731995?, -2.302775637731995?, -2.302775637731995?,
-2.302775637731995?, -2.302775637731995?, -2.302775637731995?]
"""
G = g.automorphism_group()
G.cardinality() 
from sage.graphs.independent_sets import IndependentSets
I = IndependentSets(g)
list(I)
</textarea>
</div>
<hr/>