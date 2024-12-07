from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
import logging
import json

# Constants
USER_ID = 123  # Replace with dynamic user handling if required
REQUIRED_FIELDS = ["email", "deal_id"]
SUCCESS_MESSAGE = "Contact linked to deal successfully"
ERROR_INVALID_JSON = "Invalid JSON body"
ERROR_MISSING_FIELDS = "Email and deal_id are required"

# In-memory data store for linked contacts and deals
contacts_deals = []

# Configure logger
logger = logging.getLogger(__name__)

@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def link_contacts_deals(request):
    """
    API to link a contact with a deal.
    """
    try:
        # Parse request data
        email = request.data.get('email')
        deal_id = request.data.get('deal_id')
        
        logger.info(f"Received request to link contact with email: {email} to deal ID: {deal_id}")

        # Validate input
        missing_fields = [field for field in REQUIRED_FIELDS if not request.data.get(field)]
        if missing_fields:
            logger.warning(f"Missing required fields: {missing_fields}")
            return Response({
                'error': ERROR_MISSING_FIELDS,
                'missing_fields': missing_fields
            }, status=status.HTTP_400_BAD_REQUEST)

        # Link contact and deal
        contact_deal = {
            "userId": USER_ID,
            "email": email,
            "dealId": deal_id
        }
        contacts_deals.append(contact_deal)

        logger.info(f"Contact {email} linked to deal {deal_id} successfully")
        return Response({
            "message": SUCCESS_MESSAGE,
            "data": contact_deal
        }, status=status.HTTP_201_CREATED)

    except json.JSONDecodeError:
        logger.error("Failed to parse JSON body")
        return Response({
            'error': ERROR_INVALID_JSON
        }, status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        logger.error(f"An unexpected error occurred: {e}")
        return Response({
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
