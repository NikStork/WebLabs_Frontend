function lockedProfile() {
    let profiles = document.querySelectorAll('.profile');

    for (let profile of profiles) {
        let showBtn = profile.querySelector('button');
        let hiddenFields = profile.querySelector('div');

        showBtn.addEventListener('click', () => {
            let unlockBtn = profile.querySelector('input[value="unlock"]');

            if (!unlockBtn.checked) {
                hiddenFields.style.display = 'none';
                showBtn.textContent = 'Show more';
            }
            else {
                hiddenFields.style.display = 'block';
                showBtn.textContent = 'Hide it';
            }
        });
    }
}