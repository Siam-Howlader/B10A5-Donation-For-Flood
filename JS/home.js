function clicks(input, btn, donatedAmount) {
    document.getElementById(btn).addEventListener('click', function () {
        let inputText = document.getElementById(input).value;
        const amount = parseInt(inputText);
        if (typeof amount === 'number' && amount >= 0) {
            document.getElementById(donatedAmount).innerText = parseInt(document.getElementById(donatedAmount).innerText) + amount;
            document.getElementById('account-balance').innerText = parseInt(document.getElementById('account-balance').innerText) - amount;
            document.getElementById(input).value = '';
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            };
            const customDateTime = now.toLocaleString('en-US', options);
            const section = document.createElement('div');
            const arr = customDateTime.split(',');
            if (input === 'input-1') {
                section.innerHTML = `
            <section class="border-2 rounded-lg p-5 hidden mb-4 mt-2">
                <p class="font-medium text-xl mb-2">${amount} Taka is donated for flood at Noakhali, Bangladesh</p>
                <p class="text-lg">${arr[0]}${arr[1]}${arr[2]}</p>
            </section>
            `
                document.getElementById('main-container').appendChild(section);
            } else if (input === 'input-2') {
                section.innerHTML = `
            <section class="border-2 rounded-lg p-5 hidden mb-4 mt-2">
                <p class="font-medium text-xl mb-2">${amount} Taka is donated for flood at Feni, Bangladesh</p>
                <p class="text-lg">${arr[0]}${arr[1]}${arr[2]}</p>
            </section>
            `
                document.getElementById('main-container').appendChild(section);
            } else {
                section.innerHTML = `
            <section class="border-2 rounded-lg p-5 hidden mb-4 mt-2">
                <p class="font-medium text-xl mb-2">${amount} Taka is donated for injured students of quota movement, Bangladesh</p>
                <p class="text-lg">${arr[0]}${arr[1]}${arr[2]}</p>
            </section>
            `
                document.getElementById('main-container').appendChild(section);
            }

        } else {
            alert('Invalid Input');
            document.getElementById(input).value = '';
        }
    })
}

clicks('input-1', 'donate-btn-1', 'donated-amount-for-noakhali');
clicks('input-2', 'donate-btn-2', 'donated-amount-for-feni');
clicks('input-3', 'donate-btn-3', 'donated-amount-for-students');

document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('history-btn').classList.remove('bg-[#0000000e]');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]');
    document.getElementById('history-btn').classList.add('border-none');
    document.getElementById('history-btn').classList.remove('text-[rgba(17,17,17,0.7)]');
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('donation-btn').classList.add('bg-[#0000000e]');
    document.getElementById('donation-btn').classList.add('border-2');
    const sections = document.querySelectorAll('#main-container > section');
    console.log(sections);
    for(let i=0;i<3;i++)
    {
        sections[i].classList.add('hidden');
    }
    const hiddenSections = document.querySelectorAll('#main-container > div > section');
    for(const hiddenSection of hiddenSections)
    {
        hiddenSection.classList.remove('hidden');
    }
    document.getElementById('ft').classList.add('hidden');
})

document.getElementById('donation-btn').addEventListener('click', function () {
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn').classList.add('bg-[#0000000e]');
    document.getElementById('history-btn').classList.remove('border-none');
    document.getElementById('history-btn').classList.add('border-2');
    document.getElementById('history-btn').classList.add('text-[rgba(17,17,17,0.7)]');
    document.getElementById('donation-btn').classList.add('bg-[#B4F461]');
    document.getElementById('donation-btn').classList.remove('border-2');
    const sections = document.querySelectorAll('#main-container > section');
    console.log(sections);
    for (let i = 0; i < 3; i++) {
        sections[i].classList.remove('hidden');
    }
    const hiddenSections = document.querySelectorAll('#main-container > div > section');
    for (const hiddenSection of hiddenSections) {
        hiddenSection.classList.add('hidden');
    }
    document.getElementById('ft').classList.remove('hidden');
})
