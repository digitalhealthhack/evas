# Evas

### Event Assistance

(EE-vass)

Social app for those who require assistance in daily life.

## Aim

To help users request assistance from their friends and family.

To do this by providing a service where events can be created and shared via social networks with "yes", "no", and "maybe" responses.

## Service requirements

- [ ] User membership
- [ ] Create events
- [ ] Show event responses
- [ ] Share events with a link
- [ ] Share events easily via social networks
- [ ] Get and save events from calendars

## Starting the API

```bash
# create virtualenv
mkvirtualenv evas
# install python project dependencies
pip install -r requirements.txt

# setup debug mode
export DEBUG=True
export TEMPLATE_DEBUG=True

# run the server (default on localhost:80)
python manage.py runserver
```
