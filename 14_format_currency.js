const formatPHP = n => new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(n);
console.log(formatPHP(1250));
