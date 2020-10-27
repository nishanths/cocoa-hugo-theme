.PHONY: link-exampleSite-theme
link-exampleSite-theme:
	(cd exampleSite && rm -rf themes && mkdir themes && \
		cd themes && ln -sf ../../ cocoa)
