function updateTotals() {
    const rows = document.querySelectorAll("#line-items tr");
    let invoiceTotal = 0;

    rows.forEach((row) => {
        const qty = parseFloat(row.children[1].querySelector("input").value) || 0;
        const rate = parseFloat(row.children[2].querySelector("input").value) || 0;
        const total = qty * rate;
        row.children[3].textContent = `$${total.toFixed(2)}`;
        invoiceTotal += total;
    });

    document.getElementById("invoice-total").textContent = `$${invoiceTotal.toFixed(2)}`;
}

// Update totals on input change
document.addEventListener("input", (e) => {
    if (e.target.closest("#line-items")) {
        updateTotals();
    }
});

// Add new row
document.getElementById("add-row").addEventListener("click", () => {
    const tbody = document.getElementById("line-items");
    const row = document.createElement("tr");

    row.innerHTML = `
    <td><input placeholder="Description" /></td>
    <td><input type="number" value="1" /></td>
    <td><input type="number" value="0" /></td>
    <td>$0.00</td>
  `;

  tbody.appendChild(row);
    
});