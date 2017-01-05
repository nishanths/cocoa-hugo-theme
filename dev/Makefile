.PHONY: css clean

css: clean
	lessc less/reset.less ../static/css/reset.css
	lessc less/pygments.less ../static/css/pygments.css
	lessc less/main.less ../static/css/main.css

clean:
	rm -rf ../static/css
