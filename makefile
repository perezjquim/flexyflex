main: update repackage

update:
	@echo "@Updating files...@"
	@cp -R flexyflex-js/* flexyflex-deb/opt/flexyflex/
	@echo "@Files updated!@"

repackage:
	@echo "@Repackaging...@"
	@dpkg-deb --build flexyflex-deb flexyflex-install > /dev/null
	@echo "@Repackaged!@"
