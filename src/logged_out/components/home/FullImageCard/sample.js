                <FiCard className={classes.card}>
                              <FiCardMedia
                                media="picture"
                                alt="For Employers"
                                image={`${process.env.PUBLIC_URL}/images/logged_out/employers.jpeg`}
                                title="For Employers"
                              />
                              <FiCardContent className={classes.fiCardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                  Hire The Best Talent with Magnus Infinity
                                </Typography>
                                <Typography
                                  variant="body2"
                                  className={classes.fiCardContentTextSecondary}
                                  component="p"
                                >
                                  We leverage cutting-edge technology to provide your firm talented candidates
                                </Typography>
                              </FiCardContent>
                              <FiCardActions className={classes.fiCardContent}>
                                <Button size="small" color="inherit" variant="outlined">
                                  Register
                                </Button>
                              </FiCardActions>
                            </FiCard>