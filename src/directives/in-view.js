const config = {
	threshold: [0, .25, .5, .75, 1]
};

export default {
	inserted: el => {
		const inViewClass = 'in_view';
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if(el.classList.contains("paths")){
					if (entry.intersectionRatio >= 0.001) {
						el.classList.add(inViewClass);
					} else if (entry.intersectionRatio === 0) {
						el.classList.remove(inViewClass);
					}
				}else{
					if (entry.intersectionRatio >= 0.2) {
						el.classList.add(inViewClass);
					} else if (entry.intersectionRatio === 0) {
						el.classList.remove(inViewClass);
					}
				}

			});
		}, config);

		observer.observe(el);
	}
};
