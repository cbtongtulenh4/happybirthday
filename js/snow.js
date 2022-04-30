function snow(amount, address) {
    
    let container = document.getElementById(address);

    for (let i = 0; i <= amount; i++) {
        let snowflake = document.createElement('span');
        snowflake.classList = "snow-flake";
        var size = Math.random() * 5;

        snowflake.style.width = 1 + size + 'px';
        snowflake.style.height = 1 + size + 'px';

        snowflake.style.top = Math.random() * window.innerHeight + 'px';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';

        var duration = Math.random() * 2;
        snowflake.style.animationDuration = 1 + duration + 's';

        container.appendChild(snowflake);
    }

}