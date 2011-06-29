#!/usr/bin/env python

try:
	import argparse
	ap = 1
except ImportError:
	import optparse
	ap = 0

import os
import tempfile
import sys

FILES = [
'CacildsJS.js',
'display/Display.js',
'display/Sprite.js',
'display/Stage.js'
]

def merge(files):

	buffer = []

	for filename in files:
		with open(os.path.join('..', 'src', filename), 'r') as f:
			buffer.append(f.read())

	return "".join(buffer)


def output(text, filename):

	with open(os.path.join('..', 'build', filename), 'w') as f:
		f.write(text)


def compress(text):

	in_tuple = tempfile.mkstemp()
	with os.fdopen(in_tuple[0], 'w') as handle:
		handle.write(text)

	out_tuple = tempfile.mkstemp()

	os.system("java -jar compiler/compiler.jar --language_in=ECMASCRIPT5_STRICT --js %s --js_output_file %s" % (in_tuple[1], out_tuple[1]))

	with os.fdopen(out_tuple[0], 'r') as handle:
		compressed = handle.read()

	os.unlink(in_tuple[1])
	os.unlink(out_tuple[1])

	return compressed


def addHeader(text, endFilename):
	return ("/*\n * CacildsJS\n * http://github.com/silviopaganini/\n * @silviopaganini | s2paganini.com\n */\n\n") + text

def buildLib(files, minified, filename):

	text = merge(files)

	if filename == "CacildsJS":
		folder = ''
	else:
		folder = 'custom/'

	filename = filename + '.js'

	print "=" * 40
	print "Compiling", filename
	print "=" * 40

	if minified:
		text = compress(text)

	output(addHeader(text, filename), folder + filename)


def buildIncludes(files, filename):

	template = '\t\t<script type="text/javascript" src="../src/%s"></script>'
	text = "\n".join(template % f for f in files)

	output(text, filename + '.js')


def parse_args():

	if ap:
		parser = argparse.ArgumentParser(description='Build and compress CacildsJS.js')
		parser.add_argument('--minified', help='Generate minified versions', action='store_const', const=True, default=False)

		args = parser.parse_args()

	else:
		parser = optparse.OptionParser(description='Build and compress CacildsJS.js')
		parser.add_option('--minified', help='Generate minified versions', action='store_const', const=True, default=False)
	
		args, remainder = parser.parse_args()

	# If no arguments have been passed, show the help message and exit
	if len(sys.argv) == 1:
		parser.print_help()
		sys.exit(1)

	return args


def main(argv=None):

	args = parse_args()
	minified = args.minified

	config = [['CacildsJS', 'includes', FILES, args]]

	for fname_lib, fname_inc, files, enabled in config:
		if enabled or args.all:
			buildLib(files, minified, fname_lib)

if __name__ == "__main__":
	main()

