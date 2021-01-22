function edit(ref, match, replacer) {
    const content = ref.textContent;
    const matcher = new RegExp(match, 'g');
    const result = content.replace(matcher, replacer);
    ref.textContent = result; 
}