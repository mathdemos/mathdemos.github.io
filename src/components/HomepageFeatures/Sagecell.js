import React from 'react';
export default function Sagecell({children, autoeval=true}) {
    return (
    <div class="sage">
      <script type="text/x-sage">{children}</script>
    </div>
    );
  }