$(document).ready(function() {
      const rows = $('tbody tr');
      let currentIndex = -1;

      $('#highlightButton').click(function() {
        if (currentIndex >= 0) {
          rows.eq(currentIndex).removeClass('highlighted');
        }
        currentIndex = (currentIndex + 1) % rows.length;
        rows.eq(currentIndex).addClass('highlighted');
      });

      $('#clearButton').click(function() {
        if (currentIndex >= 0) {
          rows.eq(currentIndex).removeClass('highlighted');
          currentIndex = -1;
        }
      });
    });