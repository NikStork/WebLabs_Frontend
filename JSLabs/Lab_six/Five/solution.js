function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const input = document.getElementById('searchField').value.toLowerCase();
      const table = document.querySelector('table');
      const rows = table.querySelectorAll('tbody tr');

      rows.forEach(row => {
         const cells = row.querySelectorAll('td');
         let match = false;

         cells.forEach(cell => {
            const text = cell.textContent.toLowerCase();
            if (text.includes(input) || text.split(' ').some(word => word.startsWith(input))) {
               match = true;
            }
         });

         if (match) {
            row.classList.add('select');
         }
         else {
            row.classList.remove('select');
         }
      });
   }
}