'use strict';

(function(){

  //Replace with your credentials
  var search = instantsearch({
    appId: 'latency',
    apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
    indexName: 'bestbuy'
  });

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-box',
      placeholder: 'Search for a product...'
    })
  );

  search.addWidget(
    instantsearch.widgets.stats({
      container: '#stats'
    })
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      hitsPerPage: 12,
      templates: {
        empty: '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>',
        item: '<pre class="hit">{{raw}}</pre>'
      },
      transformData: {
        item: function(hit) {
          hit.raw = JSON.stringify(hit, null, 2);
          return hit;
        }
      }
    })
  );

  search.start();
})();
