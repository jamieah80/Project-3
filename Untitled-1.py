<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkbox Example</title>
</head>
<body>
    <form id="checkboxForm">
        <label>
            <input type="checkbox" id="selectAll" onclick="toggleSelectAll(this)">
            Select All
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="Health">
            Health
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="Immigration & Asylum">
            Immigration & Asylum
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="Crime">
            Crime
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="The economy">
            The economy
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="Tax">
            Tax
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="Pensions">
            Pensions
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="Education">
            Education
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="Family life & childcare">
            Family life & childcare
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="Housing">
            Housing
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="The environment">
            The environment
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="Britain leaving the EU">
            Britain leaving the EU
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="Transport">
            Transport
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="Welfare benefits">
            Welfare benefits
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="Defence and security">
            Defence and security
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="None of these">
            None of these
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="Afghanistan">
            Afghanistan
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="Defence and Terrorism">
            Defence and Terrorism
        </label>
        <br>
        <label>
            <input type="checkbox" class="individualCheckbox" value="Don't know / None of these">
            Don't know / None of these
        </label>
        <br>
        <button type="button" onclick="findUnchecked()">Find Unchecked</button>
    </form>

    <script>
        function toggleSelectAll(selectAllCheckbox) {
            const checkboxes = document.querySelectorAll('.individualCheckbox');
            checkboxes.forEach(checkbox => {
                checkbox.checked = selectAllCheckbox.checked;
            });
        }

        document.querySelectorAll('.individualCheckbox').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const selectAllCheckbox = document.getElementById('selectAll');
                const allChecked = document.querySelectorAll('.individualCheckbox:checked').length === document.querySelectorAll('.individualCheckbox').length;
                selectAllCheckbox.checked = allChecked;
            });
        });

        function findUnchecked() {
            const uncheckedCheckboxes = [];
            const checkboxes = document.querySelectorAll('.individualCheckbox');
            checkboxes.forEach(checkbox => {
                if (!checkbox.checked) {
                    uncheckedCheckboxes.push(checkbox.value);
                }
            });
            
            if (uncheckedCheckboxes.length > 0) {
                alert(`Unchecked checkboxes: ${uncheckedCheckboxes.join(', ')}`);
            } else {
                alert('All checkboxes are checked.');
            }
        }
    </script>
</body>
</html>
