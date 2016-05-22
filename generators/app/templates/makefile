CC ?= cc
CFLAGS =-g -Wall -Ideps -Wextra
SOURCES = src/<%= name %>.c
OBJECTS = $(SOURCES:.c=.o)
DEBUGGER=lldb

all:build/<%= name %>.o

build/<%= name %>.o: $(OBJECTS)
	@mkdir -p build
	cp $^ $@

bin/test: test.o $(OBJECTS)
	@mkdir -p bin
	$(CC) $^ -o $@

%.o: %.c
	$(CC) $< $(CFLAGS) -c -o $@

clean:
	rm -fr bin build *.o src/*.o

test: bin/test
	echo @./$<
	@./$<

debug: bin/test
	$(DEBUGGER) $<

.PHONY: test clean deploy
